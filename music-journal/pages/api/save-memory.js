export default async function handler(req, res) {
    let song = req.body.song;
    let text = req.body.content;
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
    const saveSong = firebaseAdmin.database().ref(`/memory/${user.uid}/${messageUuid}/song`).set(song);
    const saveText = firebaseAdmin.database().ref(`/memory/${user.uid}/${messageUuid}/text`).set(text);
    await Promise.all([saveSong, saveText]);
    res.writeHead(301, {
        Location: '/',
    });
    res.end();




}