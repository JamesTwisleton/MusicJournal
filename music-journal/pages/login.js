import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { auth, firebase } from '../src/firebase';
import router from 'next/router';

class Login extends React.Component {

  static async getInitialProps(ctx) {
    const user = firebase.auth().currentUser;
    if (!user) {
      return {};
    }
    return {user};
  }

  handleSignIn = () => {
    router.push('/api/spotify-auth');
    // var provider = new firebase.auth.GoogleAuthProvider();
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    // auth.signInWithPopup(provider)
    //   .then(() => {
    //     alert('You are signed In');
    //   })
    //   .catch(err => {
    //     alert('OOps something went wrong check your console');
    //     console.log(err);
    //   });
  }
  handleLogout = () => {
    auth.signOut().then(function () {
      alert('Logout successful');
    }).catch(function (error) {
      alert('OOps something went wrong check your console');
      console.log(err);
    });
  }

  componentDidMount() {
    if (this.props.user) {
      router.push('/');
    }
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>Welcome to MusicJournal</title>
        </Head>
        <div>
          <Link href="/music-journal"><a>Go to MusicJournal</a></Link>
          <button onClick={this.handleSignIn}>Sign In</button>
        </div>
        

      </Layout>
    )
  }
}

export default Login;