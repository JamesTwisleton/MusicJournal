export default async function handler(req, res) {
    if(!req.body.song || !req.body.memorytext) {
        return('save memory request missing key data');
    }
    const firebaseAdmin = require('firebase-admin');
    const firebase = require('firebase');
    const serviceAccount = require('../../service-account.json');

    const { v4: uuid } = require('uuid');
    if (!firebaseAdmin.apps.length) {
        firebaseAdmin.initializeApp({
            credential: firebaseAdmin.credential.cert(serviceAccount),
            databaseURL: process.env.FIREBASE_DATABASE_URL,
        });
    }
    const user = firebase.auth().currentUser;
    const messageUuid = uuid();
    const saveSong = firebaseAdmin.database().ref(`/memory/${user.uid}/${messageUuid}/song`).set(req.body.song);
    const saveText = firebaseAdmin.database().ref(`/memory/${user.uid}/${messageUuid}/text`).set(req.body.memorytext);
    await Promise.all([saveSong, saveText]);
    res.writeHead(301, {
        Location: '/',
    }).end();
}