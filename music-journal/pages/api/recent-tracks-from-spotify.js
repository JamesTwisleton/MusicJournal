import { auth } from '../../utils/initFirebase'
import Cors from 'cors';
import { database } from '../../utils/initFirebaseAdmin';
import initMiddleware from '../../utils/initMiddleware'
import Spotify from '../../utils/initSpotify';

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
        const user = auth.currentUser;
        
        const ref = await database.ref(`/spotifyAccessToken/${user.uid}`);
        const snapshot = await ref.orderByValue().once("value")
        const spotifyToken = await snapshot.val()
        
        Spotify.setAccessToken(spotifyToken);
        
        const data = await Spotify.getMyRecentlyPlayedTracks({ limit: 20 })
        
        const recentSongs = data.body.items.map(({track}, idx) => ({
            position: idx,
            trackName: track.name,
            description: `${track.name} by ${track.artists[0].name}`,
            image: track.album.images[0],
            track
        }));
            
        res.send(recentSongs);
    } catch (error) {
        console.log('recent spotify', error)
    }
}

export default handler
