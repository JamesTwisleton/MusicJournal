const crypto = require('crypto');
const SpotifyWebApi = require('spotify-web-api-node');
const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('../../service-account.json');
const serialize = require('serialize-javascript');

import Cors from 'cors';
const cors = Cors({
  methods: ['GET', 'HEAD'],
});
const OAUTH_SCOPES = ['user-read-email', 'user-read-recently-played'];
if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}
const Spotify = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.AUTH_REDIRECT_URL,
});


// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}


async function handler(req, res) {
  await runMiddleware(req, res, cors);
  const state = req.cookies.state || crypto.randomBytes(20).toString('hex');
  const serializedCookie = serialize({
    verificationState: state.toString(),
    'maxAge': 3600000,
    'secure': true,
    'httpOnly': true,
  });
  const authorizeURL = await Spotify.createAuthorizeURL(OAUTH_SCOPES, state.toString());
  res.writeHead(301, {
    Location: authorizeURL,
    'set-cookie': `__session=${serializedCookie}`
  });

  return res.end();

};


export default handler;