import { useEffect } from 'react';
import Head from 'next/head';
import { auth, firebase } from '../utils/initFirebase';
import router from 'next/router';
import { Container, Row, Button, Image } from 'react-bootstrap/';

const Login = ({ user }) => {

  const handleSignIn = () => {
    router.push(`/api/spotify-auth`);
  }

  //This should probably move into the nav
  const handleSignOut = () => {
    auth.signOut().then(function () {
      alert('Logout successful');
    }).catch(function (error) {
      alert('OOps something went wrong check your console');
      // console.log(err);
    });
  }

  useEffect(() => {
    if (user) {
      router.push('/');
    }
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
        <Row className="justify-content-center">
          <Button variant="dark" onClick={() => handleSignIn()}>
            <Image src="spotify-logo.png" fluid />
            Login with Spotify to continue
          </Button>
          <Button variant="light" onClick={() => handleSignOut()}>
            Logout
          </Button>
        </Row>
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

Login.getInitialProps = async (ctx) =>  {
  const user = firebase.auth().currentUser;
  if (!user) {
    return {};
  }
  return { user };
}

export default Login;
