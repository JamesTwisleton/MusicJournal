const Cookies = require('cookies');
const crypto = require('crypto');
const SpotifyWebApi = require('spotify-web-api-node');

const Spotify = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.AUTH_REDIRECT_URL,
});
const OAUTH_SCOPES = ['user-read-email', 'user-read-recently-played'];

export default function handler(req, res) {
  const cookies = new Cookies(req, res);
  const state = req.cookies.state || crypto.randomBytes(20).toString('hex');
  cookies.set('verificationState', state.toString());
  cookies.set('maxAge', 3600000);
  cookies.set('secure', true);
  cookies.set('httpOnly', true);
  const authorizeURL = Spotify.createAuthorizeURL(OAUTH_SCOPES, state.toString());
  res.writeHead(301, {
    Location: authorizeURL
  });
  res.end();
}
