import Cors from 'cors';
import crypto from 'crypto';
import initMiddleware from '../../lib/init-middleware';
import serialize from 'serialize-javascript';
import Spotify from '../../utils/initSpotify';

const cors = initMiddleware(
  Cors({
      methods: ['GET', 'POST', 'OPTIONS', 'HEAD'],
  })
)

const OAUTH_SCOPES = ['user-read-email', 'user-read-recently-played'];

async function handler(req, res) {
  await cors(req, res)
  
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
