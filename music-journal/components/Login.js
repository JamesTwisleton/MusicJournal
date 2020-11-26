import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { getMe, deleteMe } from '../utils/auth';
import router from 'next/router';
import { Container, Row, Button, Image } from 'react-bootstrap/';

const Login = () => {
  const [user, setUser] = useState()

  const handleSignIn = () => {
    router.push(`/api/spotify-auth`);
  }

  //This should probably move into the nav
  const handleSignOut = async () => {
    const success = await deleteMe()
    if (success) {
      console.log('success', success)
      setUser()
    } 
  }

  useEffect(() => {
    const getUser = async () => { 
      try {
        const [, currentUser] = await getMe()
        setUser(currentUser)
      } catch (error) {
        setUser()
      }
    }
    
    getUser()
  }, [])

  return (
    <>
      <Head>
        <title>Welcome to MusicJournal</title>
      </Head>

      <Container>
        <Row className="justify-content-center" xs={12}>
          <h1>Welcome!</h1>
        </Row>
        <Row className="text-center">
          <p>MusicJournal is a different way of thinking about the music you love, how it relates to your memories, and how to categorize it.</p>
        </Row>
          {!user && 
            <Row className="justify-content-center">
              <Button variant="dark" onClick={() => handleSignIn()}>
                <Image src="spotify-logo.png" fluid />
                Login with Spotify to continue
              </Button>
            </Row>
          }
          {user &&
            <Container>
              <Row className="justify-content-center">
                <p>You're already logged in!</p>
              </Row>
              <Row className="justify-content-center">
                <Button variant="light" onClick={() => handleSignOut()}>
                  Logout
                </Button>
              </Row>
            </Container>
          }
      </Container>

      <style global jsx>
        {`
          .btn-dark {
            width: 25%;    
          }
        `}
      </style>
    </>
  )
}

export default Login;
