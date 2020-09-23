

export default async function handler(req, res) {
    if (!req.query.song || !req.query.text) {
        res.status(200).json({
            'memory created': false,
            'error': 'missing song or text params'
        });
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
    const saveSong = firebaseAdmin.database().ref(`/memory/${user.uid}/${messageUuid}/song`).set(req.query.song);
    const saveText = firebaseAdmin.database().ref(`/memory/${user.uid}/${messageUuid}/text`).set(req.query.text);
    await Promise.all([saveSong, saveText]);
    res.status(200).json({
        'memory created': true
    });
}