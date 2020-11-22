import { auth } from '../../utils/initFirebase';
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware'

const cors = initMiddleware(
    Cors({
        methods: ['GET', 'POST', 'OPTIONS', 'HEAD'],
    })
)

async function handler(req, res) {
    await cors(req, res)

    if (!req.query.token) {
        return res.writeHead(401).end();
    }
    try {
        const firebaseUser = await auth.signInWithCustomToken(req.query.token);
        return res.status(200).json(firebaseUser);
    } catch (error) {
        console.log(error);
        return res.writeHead(401).end();
    }
};

export default handler;