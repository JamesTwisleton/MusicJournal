import React from 'react'
import PropTypes from 'prop-types'
import '../styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProvider } from '../utils/useAuth'

// This default export is required in a new `pages/_app.js` file.
function MyApp ({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}

export default MyApp
