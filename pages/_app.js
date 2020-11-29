import React from 'react'
import PropTypes from 'prop-types'
import '../styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// This default export is required in a new `pages/_app.js` file.
function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}
export default MyApp
