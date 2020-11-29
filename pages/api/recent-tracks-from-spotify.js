import { auth } from '../../utils/initFirebase'
import Cors from 'cors'
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

async function handler (req, res) {
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

    const data = await Spotify.getMyRecentlyPlayedTracks({ limit: 20 })

    const recentSongs = data.body.items.map(({ track }, idx) => ({
      position: idx,
      trackName: track.name,
      description: `${track.name} by ${track.artists[0].name}`,
      image: track.album.images[0],
      track
    }))

    res.send(recentSongs)
  } catch (error) {
    console.log('recent spotify', error)
  }
}

export default handler
