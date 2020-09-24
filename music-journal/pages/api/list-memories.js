

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

    const user = await firebase.auth().currentUser;
    if (!user) {
        res.status(403).json({
            authenticated: false
        });
    }
    const ref = await firebaseAdmin.database().ref(`/memory/${user.uid}`);

    await ref.orderByValue().on("value", function (snapshot) {
        let memories = [];
        snapshot.forEach(function (data) {
            memories.push(data.val());
        });
        res.status(200).json({
            memories
        });
    });
}