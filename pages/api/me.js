import { auth } from '../../utils/initFirebase'
import Cors from 'cors'
import initMiddleware from '../../utils/initMiddleware'
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

  try {
    const firebaseUser = await auth.signInWithCustomToken(req.token)
    return res.status(200).json(firebaseUser)
  } catch (error) {
    console.log(error)
    return res.writeHead(401).end()
  }
};

export default handler
