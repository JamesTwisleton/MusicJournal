import React from 'react'
import { Container } from 'react-bootstrap/'
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
    <>
<<<<<<< HEAD
=======
      <NavigationBar />
>>>>>>> New style nav
      <Container fluid id="main">

        {children}
        <style global jsx>{`
            #main {
              background: linear-gradient(to bottom, #FFFFFF, #000000) no-repeat center center fixed;
              background-size: cover;
              margin: 0;
              padding:0;
              min-height: 100vh;
            }
          `}
        </style>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.object
}

export default Layout
