import { auth } from 'firebase';
import Cors from 'cors';
import firebaseAdmin from 'firebase-admin';
import initMiddleware from '../../lib/init-middleware'
import serviceAccount from '../../service-account.json';
import SpotifyWebApi from 'spotify-web-api-node';

const cors = initMiddleware(
    Cors({
        methods: ['GET', 'POST', 'OPTIONS', 'HEAD'],
    })
)

const Spotify = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.AUTH_REDIRECT_URL,
});

export default async function handler(req, res) {
    try {
        await cors(req, res)
    } catch (error) {
        console.log('recent cors', error)        
    }

    if (!firebaseAdmin.apps.length) {
        firebaseAdmin.initializeApp({
            credential: firebaseAdmin.credential.cert(serviceAccount),
            databaseURL: process.env.FIREBASE_DATABASE_URL,
        });
    }

    if (!req.query.token) {
        return res.writeHead(401).end();
    }

    let loginFailed = false;

    try {
        await auth().signInWithCustomToken(req.query.token);
    } catch (error) {
        console.log(error);
        loginFailed = true;
    }
    if (loginFailed) {
        return res.writeHead(401).end();
    }
    
    try {
        const user = auth().currentUser;
        const ref = await firebaseAdmin.database().ref(`/spotifyAccessToken/${user.uid}`);
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
