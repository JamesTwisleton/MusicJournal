const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('../../service-account.json');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');

if(!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}



// Spotify OAuth 2 setup
// TODO: Configure the `spotify.client_id` and `spotify.client_secret` Google Cloud environment variables.
const SpotifyWebApi = require('spotify-web-api-node');
const Spotify = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.FIREBASE_REDIRECT_URL,
});

// Scopes to request.
const OAUTH_SCOPES = ['user-read-email'];


export default function handler(req, res) {
  
    const state = req.cookies.state || crypto.randomBytes(20).toString('hex');
    // console.log('Setting verification state:', state);
    // res.cookie('state', state.toString(), {maxAge: 3600000, secure: true, httpOnly: true});
    const authorizeURL = Spotify.createAuthorizeURL(OAUTH_SCOPES, state.toString());
    res.redirect(authorizeURL);
  
  }


//Should be able to use service account (messaged securely) and this guide
//https://github.com/firebase/functions-samples/blob/master/spotify-auth/functions/index.js
