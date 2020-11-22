import { auth } from 'firebase'
import Cors from 'cors';
import firebaseAdmin from 'firebase-admin'
import initMiddleware from '../../lib/init-middleware'
import serviceAccount from  '../../service-account.json'
import { v4 as uuidv4 } from 'uuid';

const cors = initMiddleware(
    Cors({
        methods: ['GET', 'POST', 'OPTIONS', 'HEAD'],
    })
)

const messageUuid = uuidv4();

export default async function handler(req, res) {
    await cors(req, res)
    
    if (!firebaseAdmin.apps.length) {
        firebaseAdmin.initializeApp({
            credential: firebaseAdmin.credential.cert(serviceAccount),
            databaseURL: process.env.FIREBASE_DATABASE_URL,
        });
    }
    
    if (!req.query.token) {
        return res.writeHead(401).end();
    }

    if (!req.body.song || !req.body.memorytext) {
        return ('save memory request missing key data');
    }
    
    try {
        await auth().signInWithCustomToken(req.query.token);
    } catch (error) {
        console.log(error);
        return res.writeHead(401).end();
    }

    try {
        const user = await auth().currentUser;
        
        if (!user) {
            res.status(403).json({
                authenticated: false
            });
        }

        const song = await firebaseAdmin.database().ref(`/memory/${user.uid}/${messageUuid}/song`).set(req.body.song);
        const messageText = await firebaseAdmin.database().ref(`/memory/${user.uid}/${messageUuid}/text`).set(req.body.memorytext);
        res.send({ messageText, song })
    } catch (error) {
        console.log('save error', error)
    }

    return res.status(200).json('cool');
}
