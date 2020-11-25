import { auth } from 'firebase'
import Cors from 'cors';
import { database } from '../../utils/initFirebaseAdmin'
import initMiddleware from '../../utils/initMiddleware'
import verifyToken from '../../utils/verifyToken';

const cors = initMiddleware(
    Cors({
        methods: ['GET', 'POST', 'OPTIONS', 'HEAD'],
    })
)


const verifyTokenMiddleware = initMiddleware(verifyToken);

async function handler(req, res) {
    await cors(req, res)
    await verifyTokenMiddleware(req, res)

    try {
        const user = auth().currentUser;
        if (!user) {
            console.log('list-memories user')
            res.status(403).json({
                authenticated: false
            });
        }

        let memories = []

        const memoriesRef = await database.ref(`/memory/${user.uid}`);

        await memoriesRef.orderByValue().once("value", snapshot => {
            snapshot.forEach(data => { memories.push(data.val()) })
        })

        res.send(memories)
    } catch (error) {
        console.log('list', error)
    }
}

export default handler
