const crypto = require('crypto');
const SpotifyWebApi = require('spotify-web-api-node');
const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('../../service-account.json');
const Cookies = require('cookies');
import Cors from 'cors';

const cors = Cors({
  methods: ['GET', 'HEAD'],
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
  const OAUTH_SCOPES = ['user-read-email', 'user-read-recently-played'];

  return redirectToSpotify(req, res, Spotify, OAUTH_SCOPES);
};

async function redirectToSpotify(req, res, Spotify, OAUTH_SCOPES) {
  const cookies = new Cookies(req, res);
  const state = req.cookies.state || crypto.randomBytes(20).toString('hex');
  cookies.set('verificationState', state.toString());
  cookies.set('maxAge', 3600000);
  cookies.set('secure', true);
  cookies.set('httpOnly', true);
  const authorizeURL = await Spotify.createAuthorizeURL(OAUTH_SCOPES, state.toString());
  res.writeHead(301, {
    Location: authorizeURL
  });

  return res.end();
}

export default handler;