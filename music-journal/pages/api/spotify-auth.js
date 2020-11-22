import Cors from 'cors';
import crypto from 'crypto';
import firebaseAdmin from 'firebase-admin';
import initMiddleware from '../../lib/init-middleware';
import serviceAccount from '../../service-account.json';
import serialize from 'serialize-javascript';
import SpotifyWebApi from 'spotify-web-api-node';

const cors = initMiddleware(
  Cors({
      methods: ['GET', 'POST', 'OPTIONS', 'HEAD'],
  })
)

const OAUTH_SCOPES = ['user-read-email', 'user-read-recently-played'];

const Spotify = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.AUTH_REDIRECT_URL,
});


async function handler(req, res) {
  await cors(req, res)

  if (!firebaseAdmin.apps.length) {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(serviceAccount),
      databaseURL: process.env.FIREBASE_DATABASE_URL,
    });
  }
  
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
