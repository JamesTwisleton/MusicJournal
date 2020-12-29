import axios from 'axios'
import Cookies from 'js-cookie'
import { auth } from './initFirebase'

const getMe = async () => {
  try {
    const { firebaseToken } = JSON.parse(Cookies.get('__session'))

    const config = {
      headers: { Authorization: `Bearer ${firebaseToken}` }
    }

    const { data: { user } } = await axios.get('/api/me', config)

    return [firebaseToken, user]
  } catch (error) {
    console.log('auth', error)
    return [null, null]
  }
}

const deleteMe = async () => {
  try {
    await auth.signOut()
    Cookies.remove('__session', { path: '' })
    return true
  } catch (error) {
    console.log('sign out error', error)
    return false
  }
}

export { getMe, deleteMe }
