import { firebase } from '../../utils/initFirebase';
import Cors from 'cors';
const cors = Cors({
    methods: ['GET', 'HEAD'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}

async function handler(req, res) {
    await runMiddleware(req, res, cors);
    if (!req.query.token) {
        return res.writeHead(401).end();
    }
    try {
        const firebaseUser = await firebase.auth().signInWithCustomToken(req.query.token);
        return res.status(200).json(firebaseUser);
    } catch (error) {
        console.log(error);
        return res.writeHead(401).end();
    }
};

export default handler;