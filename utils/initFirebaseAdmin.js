import firebaseAdmin from 'firebase-admin';
import serviceAccount from '../service-account.json'

if (!firebaseAdmin.apps.length) {
    firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(serviceAccount),
        databaseURL: process.env.FIREBASE_DATABASE_URL,
    });
}

const database = firebaseAdmin.database()

export {
    database,
    firebaseAdmin
}
