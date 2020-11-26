import Cookies from 'js-cookie'
import { getMe } from './fetcher'

export default async function auth() {
    try {
        const { firebaseToken } = JSON.parse(Cookies.get('__session'))
        const { user } = await getMe(firebaseToken)
        
        return [firebaseToken, user]
    } catch (error) {
        console.log('auth', error)
    }
}
