import React from 'react'
import NextApp from 'next/app'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import PropTypes from 'prop-types'
import '../styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProvider } from '../utils/useAuth'

// This default export is required in a new `pages/_app.js` file.
class MyApp extends NextApp {
  static async getInitialProps ({ Component, ctx }) {
    const isServer = ctx.req || ctx.res

    const { __session } = nextCookie(ctx)

    // Redirect server/client-side if not authorized
    if (Component.isAuthorized && !Component.isAuthorized(__session)) {
      if (isServer) {
        ctx?.res?.writeHead(302, { Location: '/login' })
        ctx?.res?.end()
      } else {
        Router.push('/login')
      }
      return {}
    }

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    return { pageProps, __session }
  }

  render () {
    const { Component, pageProps, __session } = this.props

    return (
      <AuthProvider token={__session?.firebaseToken}>
        <Component {...pageProps} />
      </AuthProvider>
    )
  }
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}

export default MyApp
