import React, { useEffect, useState } from 'react'
import router from 'next/router'
import { getMe } from './auth'

const withAuth = (Component) => {
  const [loaded, setLoaded] = useState('')
  const [token, setToken] = useState('')
  const [user, setUser] = useState('')

  useEffect(async () => {
    if (document.cookie) {
      try {
        const [tokenFromServer, userFromServer] = await getMe()
        if (!tokenFromServer || !userFromServer) {
          router.push('/login')
        } else {
          setToken(tokenFromServer)
          setUser(userFromServer)
          setLoaded(true)
        }
      } catch (error) {
        console.log('withauth', error)
      }
    } else {
      router.push('/login')
    }
  }, [])

  return (
    <>
      {!loaded && <p>Loading...</p>}
      {loaded &&
        <Component {...this.props} />
      }
    </>
  )
}

export default withAuth
