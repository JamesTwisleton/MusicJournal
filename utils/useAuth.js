import React, { createContext, useContext, useEffect, useState } from 'react'
import { getMe, deleteMe } from './auth'

const AuthContext = createContext()

const AuthProvider = (props) => {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const initAuth = async () => {
      try {
        const [initToken, initUser] = await getMe()

        console.log(initToken, initUser)

        if (initToken && initUser) {
          setToken(initToken)
          setUser(initUser)
        }

        setLoaded(true)
      } catch (error) {
        console.log(error)
        setLoaded(true)
      }
    }

    initAuth()
  }, [])

  const signIn = async () => {
    try {
      setLoaded(false)
      const [newToken, newUser] = await getMe()
      setToken(newToken)
      setUser(newUser)
      setLoaded(true)
    } catch (error) {
      console.log('signin error', error)
      setToken(null)
      setUser(null)
    }
  }

  const signOut = async () => {
    try {
      await deleteMe()
      setToken(null)
      setUser(false)
    } catch (error) {
      console.log('signout issue', error)
      setToken(null)
      setUser(null)
    }
  }

  const data = { loaded, token, user }

  return <AuthContext.Provider value={{ data, signIn, signOut }} {...props} />
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
