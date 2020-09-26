export default async function handler(req, res) {
    const firebaseAdmin = require('firebase-admin');
    const firebase = require('firebase');
    const serviceAccount = require('../../service-account.json');
    if (!firebaseAdmin.apps.length) {
        firebaseAdmin.initializeApp({
            credential: firebaseAdmin.credential.cert(serviceAccount),
            databaseURL: process.env.FIREBASE_DATABASE_URL,
        });
    }

    const user = firebase.auth().currentUser;
    const ref = await firebaseAdmin.database().ref(`/spotifyAccessToken/${user.uid}`);
    let spotifyToken;
    ref.orderByValue().on("value", function (snapshot) {
        spotifyToken = snapshot.node_.value_;
    });
    res.status(200).json('ok');
}