import { auth } from 'firebase'
import Cors from 'cors';
import { database } from '../../utils/initFirebaseAdmin'
import initMiddleware from '../../utils/initMiddleware'
import { v4 as uuidv4 } from 'uuid';

const cors = initMiddleware(
    Cors({
        methods: ['GET', 'POST', 'OPTIONS', 'HEAD'],
    })
)

const messageUuid = uuidv4();

async function handler(req, res) {
    await cors(req, res)

    if (!req.query.token) {
        return res.writeHead(401).end();
    }

    if (!req.body.song || !req.body.memorytext) {
        return ('save memory request missing key data');
    }

    try {
        const user = auth().currentUser;
        
        if (!user) {
            res.status(403).json({
                authenticated: false
            });
        }

        const song = await database.ref(`/memory/${user.uid}/${messageUuid}/song`).set(req.body.song);
        const messageText = await database.ref(`/memory/${user.uid}/${messageUuid}/text`).set(req.body.memorytext);
        res.send({ messageText, song })
    } catch (error) {
        console.log('save error', error)
    }

    return res.status(200).json('cool');
}

export default handler
