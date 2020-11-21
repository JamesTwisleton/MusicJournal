const firebaseAdmin = require('firebase-admin');
const firebase = require('firebase');
const serviceAccount = require('../../service-account.json');
const SpotifyWebApi = require('spotify-web-api-node');
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


if (!firebaseAdmin.apps.length) {
    firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(serviceAccount),
        databaseURL: process.env.FIREBASE_DATABASE_URL,
    });
}

const Spotify = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.AUTH_REDIRECT_URL,
});

export default async function handler(req, res) {
    await runMiddleware(req, res, cors);
    if (!req.query.token) {
        return res.writeHead(401).end();
    }

    let loginFailed = false;
    try {
        await firebase.auth().signInWithCustomToken(req.query.token);
    } catch (error) {
        console.log(error);
        loginFailed = true;
    }
    if (loginFailed) {
        return res.writeHead(401).end();
    }

    // could this cause concurrency issues? for some reason when I use the result of the lines
    // above for the user it doesnt work
    const user = firebase.auth().currentUser;
    const ref = await firebaseAdmin.database().ref(`/spotifyAccessToken/${user.uid}`);
    let spotifyToken;

    await ref.orderByValue().once("value", snapshot => {
        spotifyToken = snapshot.node_.value_;
        Spotify.setAccessToken(spotifyToken);
        let recentSongs = [];
        Spotify.getMyRecentlyPlayedTracks({
            limit: 20
        }).then(function (data) {
            //higher number = more time since listened
            let recentTrackOrder = 0;
            data.body.items.forEach(item => {
                recentSongs.push({
                    position: recentTrackOrder,
                    trackName: item.track.name,
                    description: `${item.track.name} by ${item.track.artists[0].name}`,
                    image: item.track.album.images[0],
                    track: item.track,
                });
                recentTrackOrder += 1;
            });
            res.send(recentSongs);
        }, function (err) {
            console.log('Something went wrong!', err);
        });
    });
}
