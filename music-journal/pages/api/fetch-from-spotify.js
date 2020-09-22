const firebaseAdmin = require('firebase-admin');
const firebase = require('firebase');
const serviceAccount = require('../../service-account.json');

if (!firebaseAdmin.apps.length) {
    firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(serviceAccount),
        databaseURL: process.env.FIREBASE_DATABASE_URL,
    });
}

export default function handler(req, res) {
    const user = firebase.auth().currentUser;
    var ref = firebase.database().ref("/spotifyAccessToken/");
    ref.once("value")
        .then(function (snapshot) {
            console.log(snapshot);
        });
    res.status(200).json({ token: user });
}