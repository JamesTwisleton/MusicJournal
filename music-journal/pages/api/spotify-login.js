import Cookies from 'js-cookie';

export const getUserFromCookie = () => {
    const cookie = cookies.get('auth');
    if (!cookie) {
        return;
    }
    return JSON.parse(cookie);
};

export const setUserCookie = (user) => {
    cookies.set('auth', user, {
        // firebase id tokens expire in one hour
        // set cookie expiry to match
        expires: 1 / 24,
    });
};

export const removeUserCookie = () => cookies.remove('auth');

const crypto = require('crypto');
const SpotifyWebApi = require('spotify-web-api-node');
const Spotify = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.AUTH_REDIRECT_URL,
});
const OAUTH_SCOPES = ['user-read-email'];

export default function handler(req, res) {

    const state = req.cookies.state || crypto.randomBytes(20).toString('hex');
    console.log('Setting verification state:', state);
    Cookies.set('state', {
      verificationState: state.toString(),
      secure: true,
      httpOnly: true,
  },
  {
    expires: 1/24,
  });
  console.log(Cookies.getJSON());

    const authorizeURL = Spotify.createAuthorizeURL(OAUTH_SCOPES, state.toString());
    res.writeHead(301, {
        Location: authorizeURL,
    });
    res.end();
}
