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
    const { token } = req.query;
    firebase.auth().signInWithCustomToken(token)
        .catch(function(error) {
            console.log(false);
        });
        console.log(firebase.auth());
        const user = firebase.auth().currentUser;

    if (user) {
        console.log(user);
    } else {
        console.log('user not set', token)
    }

    res.status(200).json({});
}