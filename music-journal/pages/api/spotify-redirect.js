const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('../../service-account.json');
const Cookies = require('cookies');
const SpotifyWebApi = require('spotify-web-api-node');

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

export default function handler(req, res) {
  const cookies = new Cookies(req, res);
  try {
    if (!cookies.get('verificationState')) {
      console.error('verificationState cookie not set');
      throw new Error('State cookie not set or expired. Maybe you took too long to authorize. Please try again.');
    } else if (cookies.get('verificationState') !== req.query.state) {
      throw new Error('State validation failed');
    }
    Spotify.authorizationCodeGrant(req.query.code, (error, data) => {
      if (error) {
        throw error;
      }
      Spotify.setAccessToken(data.body['access_token']);

      Spotify.getMe(async (error, userResults) => {
        if (error) {
          throw error;
        }
        const accessToken = data.body['access_token'];
        const spotifyUserID = userResults.body['id'];
        const profilePic = userResults.body['images'][0]['url'];
        const userName = userResults.body['display_name'];
        const email = userResults.body['email'];
        const firebaseToken = await createFirebaseAccount(spotifyUserID, userName, profilePic, email, accessToken);
        cookies.set('firebaseToken', firebaseToken);
        res.writeHead(301, {
          Location: '/',
        });
        res.end();
      });
    });
  } catch (error) {
    res.send('error');
  }
}

/**
 * Creates a Firebase account with the given user profile and returns a custom auth token allowing
 * signing-in this account.
 * Also saves the accessToken to the datastore at /spotifyAccessToken/$uid
 *
 * @returns {Promise<string>} The Firebase custom auth token in a promise.
 */
async function createFirebaseAccount(spotifyID, displayName, photoURL, email, accessToken) {
  // The UID we'll assign to the user.
  const uid = `spotify:${spotifyID}`;

  // Save the access token to the Firebase Realtime Database.
  const databaseTask = firebaseAdmin.database().ref(`/spotifyAccessToken/${uid}`).set(accessToken);

  // Create or update the user account.
  const userCreationTask = firebaseAdmin.auth().updateUser(uid, {
    displayName: displayName,
    photoURL: photoURL,
    email: email,
    emailVerified: true,
  }).catch((error) => {
    // If user does not exists we create it.
    if (error.code === 'auth/user-not-found') {
      firebaseAdmin.auth().createUser({
        uid: uid,
        displayName: displayName,
        photoURL: photoURL,
        email: email,
        emailVerified: true,
      });
    } else {
      throw error;
    }
  });

  // Wait for all async tasks to complete, then generate and return a custom auth token.
  await Promise.all([userCreationTask, databaseTask]);
  // Create a Firebase custom auth token.
  const token = await firebaseAdmin.auth().createCustomToken(uid);
  console.log('Created Custom token for UID "', uid, '" Token:', token);
  return token;
}