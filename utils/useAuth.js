import React, { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getMe, deleteMe } from './auth'
import PropTypes from 'prop-types'

const AuthContext = createContext()

const AuthProvider = (props) => {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const initAuth = async () => {
      try {
        const initUser = await getMe(props.token)
        setUser(initUser)
        setLoaded(true)
      } catch (error) {
        console.log(error)
        setLoaded(true)
      }
    }

    if (!props.token) {
      setUser(null)
      setLoaded(true)
    } else {
      initAuth()
    }
  }, [props.token])

  const signIn = async () => {
    router.push('/api/spotify-auth')
  }

  const signOut = async () => {
    try {
      await deleteMe()
      setUser(false)
    } catch (error) {
      console.log('signout issue', error)
      setUser(null)
    }
  }

  const { token } = props
  const data = { loaded, token, user }

  return <AuthContext.Provider value={{ data, signIn, signOut }} {...props} />
}

AuthProvider.propTypes = {
  token: PropTypes.string
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
