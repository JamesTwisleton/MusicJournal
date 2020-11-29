import Cors from 'cors'
import { auth } from '../../utils/initFirebase'
import { database } from '../../utils/initFirebaseAdmin'
import initMiddleware from '../../utils/initMiddleware'
import Spotify from '../../utils/initSpotify'
import verifyToken from '../../utils/verifyToken'

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS', 'HEAD']
  })
)

const verifyTokenMiddleware = initMiddleware(verifyToken)

export default async function handler (req, res) {
  await cors(req, res)
  await verifyTokenMiddleware(req, res)

  const user = auth.currentUser

  if (!user) {
    res.status(403).json({
      authenticated: false
    })
  }

  try {
    const ref = await database.ref(`/spotifyAccessToken/${user.uid}`)
    const snapshot = await ref.orderByValue().once('value')
    const spotifyToken = await snapshot.val()

    Spotify.setAccessToken(spotifyToken)

    const data = await Spotify.getMyTopTracks()
    const topTracks = data.body.items

    res.send(topTracks)
  } catch (error) {
    console.log(error)
  }
}
