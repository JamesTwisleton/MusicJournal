import { auth } from 'firebase'
import Cors from 'cors';
import { database } from '../../utils/initFirebaseAdmin'
import initMiddleware from '../../utils/initMiddleware'
import verifyToken from '../../utils/verifyToken';
import { v4 as uuidv4 } from 'uuid';

const cors = initMiddleware(
    Cors({
        methods: ['GET', 'POST', 'OPTIONS', 'HEAD'],
    })
)

const verifyTokenMiddleware = initMiddleware(verifyToken);


const messageUuid = uuidv4();

async function handler(req, res) {
    await cors(req, res)
    await verifyTokenMiddleware(req, res);
    // if (!req.query.token) {
    //     console.log('no token on save memory request');
    //     return res.writeHead(401).end();
    // }
    console.log(req.body.memorytext);
    if (!req.body.song || !req.body.memoryText) {
        console.log(('save memory request missing key data'));
        return res.writeHead(401).end();
    }

    try {
        const user = auth().currentUser;

        if (!user) {
            return res.status(403).json({
                authenticated: false
            });
        }

        const song = await database.ref(`/memory/${user.uid}/${messageUuid}/song`).set(req.body.song);
        const messageText = await database.ref(`/memory/${user.uid}/${messageUuid}/text`).set(req.body.memoryText);
        return res.send({ messageText, song })
    } catch (error) {
        console.log('save error', error)
        return res.status(403).json({
            authenticated: false
        });
    }
}

export default handler
export const config = {
    api: {
        bodyParser: false,
    },
}