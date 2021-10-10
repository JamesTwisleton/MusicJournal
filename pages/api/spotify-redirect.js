import { auth } from '../../utils/initFirebase'
import Cors from 'cors'
import { database, firebaseAdmin } from '../../utils/initFirebaseAdmin'
import initMiddleware from '../../utils/initMiddleware'
import serialize from 'serialize-javascript'
import Spotify from '../../utils/initSpotify'

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS', 'HEAD']
  })
)

async function handler (req, res) {
  await cors(req, res)

  try {
    const cookie = JSON.parse(req.cookies.__session)
    if (!cookie.verificationState) {
      console.error('verificationState cookie not set')
      throw new Error('State cookie not set or expired. Maybe you took too long to authorize. Please try again.')
    } else if (cookie.verificationState !== req.query.state) {
      throw new Error('State validation failed')
    }

    console.log('Received auth code:', req.query.code)

    Spotify.authorizationCodeGrant(req.query.code, (error, data) => {
      if (error) {
        throw error
      }
      Spotify.setAccessToken(data.body.access_token)
      Spotify.getMe(async (error, userResults) => {
        if (error) {
          throw error
        }

        const accessToken = data.body.access_token
        const spotifyUserID = userResults.body.id
        const profilePic = userResults.body.images[0].url
        const userName = userResults.body.display_name
        const email = userResults.body.email
        const firebaseToken = await createFirebaseAccount(spotifyUserID, userName, profilePic, email, accessToken)
        const serializedCookie = serialize({
          firebaseToken,
          maxAge: 3600000,
          secure: true,
          httpOnly: true
        })
        await auth.signInWithCustomToken(firebaseToken).catch(error => console.log((error)))
        return res.writeHead(301, {
          Location: process.env.SITE_ADDRESS,
          'set-cookie': `__session=${serializedCookie}; Path=/`
        }).end()
      })
    })
  } catch (error) {
    console.log(error)
    return res.send('error')
  }
};

/**
 * Creates a Firebase account with the given user profile and returns a custom auth token allowing
 * signing-in this account.
 * Also saves the accessToken to the datastore at /spotifyAccessToken/$uid
 *
 * @returns {Promise<string>} The Firebase custom auth token in a promise.
 */
async function createFirebaseAccount (spotifyID, displayName, photoURL, email, accessToken) {
  // The UID we'll assign to the user.
  const uid = `spotify:${spotifyID}`

  // Save the access token to the Firebase Realtime Database.
  const databaseTask = database.ref(`/spotifyAccessToken/${uid}`).set(accessToken)

  // Create or update the user account.
  const userCreationTask = firebaseAdmin.auth().updateUser(uid, {
    displayName,
    photoURL,
    email,
    emailVerified: true
  }).catch((error) => {
    // If user does not exists we create it.
    if (error.code === 'auth/user-not-found') {
      return firebaseAdmin.auth().createUser({
        uid,
        displayName,
        photoURL,
        email,
        emailVerified: true
      })
    }
    throw error
  })

  // Wait for all async tasks to complete, then generate and return a custom auth token.
  await Promise.all([userCreationTask, databaseTask])
  // Create a Firebase custom auth token.
  const token = await firebaseAdmin.auth().createCustomToken(uid)
  console.log('Created Custom token for UID "', uid, '" Token:', token)
  return token
}

export default handler
