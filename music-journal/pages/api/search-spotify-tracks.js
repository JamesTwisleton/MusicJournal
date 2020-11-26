import { auth } from 'firebase';
import Cors from 'cors';
import { database } from '../../utils/initFirebaseAdmin';
import initMiddleware from '../../utils/initMiddleware'
import Spotify from '../../utils/initSpotify';
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
        const ref = await database.ref(`/spotifyAccessToken/${user.uid}`);
        const snapshot = await ref.orderByValue().once("value")
        const spotifyToken = await snapshot.val()

        Spotify.setAccessToken(spotifyToken);
        const data = await Spotify.search(req.query.search, ['track'], { limit: req.query.limit })

        // sure we can consolidate these types of operations to a parameterised function
        const searchResults = data.body.tracks.items.map((track, idx) => ({
            position: idx,
            trackName: track.name,
            description: `${track.name} by ${track.artists[0].name}`,
            image: track.album.images[0],
            track
        }));
        res.send(searchResults);
    } catch (error) {
        console.log(error);
        return res.writeHead(401).end();
    }
}

export default handler
