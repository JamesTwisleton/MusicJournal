export default async function handler(req, res) {
    const firebaseAdmin = require('firebase-admin');
    const firebase = require('firebase');
    const serviceAccount = require('../../service-account.json');
    const SpotifyWebApi = require('spotify-web-api-node');

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
                console.log(item.track);
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