import { auth } from '../../utils/initFirebase'
import Cors from 'cors'
import { database } from '../../utils/initFirebaseAdmin'
import initMiddleware from '../../utils/initMiddleware'
import verifyToken from '../../utils/verifyToken'
import { v4 as uuidv4 } from 'uuid'

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS', 'HEAD']
  })
)

const verifyTokenMiddleware = initMiddleware(verifyToken)

async function handler (req, res) {
  await cors(req, res)
  await verifyTokenMiddleware(req, res)

  const messageUuid = uuidv4()
  const user = auth.currentUser
  const { song, text } = req.body

  if (!song || !text) {
    console.log(('save memory request missing key data'))
    return res.writeHead(401).end()
  }

  if (!user) {
    return res.status(403).json({
      authenticated: false
    })
  }

  try {
    await database.ref(`/memory/${user.uid}/${messageUuid}/song`).set(song)
    await database.ref(`/memory/${user.uid}/${messageUuid}/text`).set(text)

    return res.send({
      [messageUuid]: { song, text }
    })
  } catch (error) {
    console.log('save error', error)
    return res.status(403).json({
      authenticated: false
    })
  }
}

export default handler
export const config = {
  api: {
    bodyParser: false
  }
}
