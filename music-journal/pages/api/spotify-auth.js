const crypto = require('crypto');
const SpotifyWebApi = require('spotify-web-api-node');
const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('../../service-account.json');
const Cookies = require('cookies');

const handler = (req, res) => {
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