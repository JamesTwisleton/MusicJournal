import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getMe, deleteMe } from './auth'

const useAuth = () => {
  const router = useRouter()
  const [token, setToken] = useState()
  const [user, setUser] = useState()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const initAuth = async () => {
      try {
        const [tokenFromServer, userFromServer] = await getMe()

        if (!tokenFromServer || !userFromServer) {
          console.log('user or token undefined')
          await deleteMe()
          router.push('/login')
        } else {
          setToken(tokenFromServer)
          setUser(userFromServer)
          setLoaded(true)
        }
      } catch (error) {
        console.log('useAuth', error)
      }
    }

    if (document.cookie) {
      initAuth()
    } else {
      router.push('/login')
    }
  }, [router])

  const handleSignIn = () => {
    router.push('/api/spotify-auth')
  }

  const handleSignOut = async () => {
    try {
      await deleteMe()
    } catch (error) {
      console.log('sign out', error)
    }
  }

  return [
    loaded,
    token,
    user,
    {
      handleSignIn,
      handleSignOut
    }
  ]
}

export default useAuth
