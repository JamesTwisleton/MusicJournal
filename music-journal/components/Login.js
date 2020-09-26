import Head from 'next/head';
import { auth, firebase } from '../src/initFirebase';
import router from 'next/router';
import { Container, Row, Col, Button, Image } from 'react-bootstrap/';

class Login extends React.Component {

  static async getInitialProps(ctx) {
    const user = firebase.auth().currentUser;
    if (!user) {
      return {};
    }
    return { user };
  }

  handleSignIn = () => {
    router.push('/api/spotify-auth');
  }
  handleLogout = () => {
    auth.signOut().then(function () {
      alert('Logout successful');
    }).catch(function (error) {
      alert('OOps something went wrong check your console');
      // console.log(err);
    });
  }

  componentDidMount() {
    if (this.props.user) {
      router.push('/');
    }
  }

  render() {
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
            <Button variant="dark" onClick={this.handleSignIn}>
              <Image src="spotify-logo.png" fluid />Login with Spotify to continue</Button>
          </Row>
        </Container>

        <style global jsx>{`
      
      .btn-dark
      {
        width: 25%;    
      }
    `}</style>

      </>
    )
  }
}

export default Login;