const firebaseAdmin = require('firebase-admin');
firebaseAdmin.initializeApp();

//Should be able to use service account (messaged securely) and this guide
https://github.com/firebase/functions-samples/blob/master/spotify-auth/functions/index.js

export default function handler(req, res) {
    console.log(firebaseAdmin);
    res.status(200).json('wow');
  }