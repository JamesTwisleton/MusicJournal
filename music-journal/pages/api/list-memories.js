import { auth } from 'firebase'
import Cors from 'cors';
import firebaseAdmin from 'firebase-admin'
import initMiddleware from '../../lib/init-middleware'
import serviceAccount from '../../service-account.json'

const cors = initMiddleware(
    Cors({
        methods: ['GET', 'POST', 'OPTIONS', 'HEAD'],
    })
)

export default async function handler(req, res) {
    await cors(req, res)

    if (!firebaseAdmin.apps.length) {
        firebaseAdmin.initializeApp({
            credential: firebaseAdmin.credential.cert(serviceAccount),
            databaseURL: process.env.FIREBASE_DATABASE_URL,
        });
    }

    try {
        const user = await auth().currentUser;
        if (!user) {
            res.status(403).json({
                authenticated: false
            });
        }

        const memoriesRef = await firebaseAdmin.database().ref(`/memory/${user.uid}`);

        let memories = []
        await memoriesRef.orderByValue().once("value", snapshot => 
            snapshot.forEach(data => memories.push(data.val()))
        )

        res.send(memories)
    } catch (error) {
        console.log('list', error)
    }
}
