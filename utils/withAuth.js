import React, { useEffect, useState } from 'react'
import router from 'next/router'
import { getMe } from './auth'

const withAuth = (Component) => {
  const [token, setToken] = useState()
  const [user, setUser] = useState()
  const [loaded, setLoaded] = useState(false)

  const [tokenFromServer, userFromServer] = useEffect(async () => {
    if (document.cookie) {
      try {
        const [tokenFromServer, userFromServer] = await getMe()
        if (!tokenFromServer || !userFromServer) {
          router.push('/login')
        } else {
          return [tokenFromServer, userFromServer, true]
        }
      } catch (error) {
        console.log('withauth', error)
      }
    } else {
      router.push('/login')
    }
  }, [])

  setToken(tokenFromServer)
  setUser(userFromServer)
  setLoaded(true)

  return (
    <>
      {!loaded && <p>Loading...</p>}
      {loaded &&
        <Component
          token={token}
          setToken={setToken}
          user={user}
          setUser={setUser} />
      }
    </>
  )
}

export default withAuth
