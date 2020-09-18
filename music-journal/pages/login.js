import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { auth, firebase } from '../src/firebase';

class Home extends React.Component {
  handleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    auth.signInWithPopup(provider)
      .then(() => {
        alert('You are signed In');
      })
      .catch(err => {
        alert('OOps something went wrong check your console');
        console.log(err);
      });
  }
  handleLogout = () => {
    auth.signOut().then(function () {
      alert('Logout successful');
    }).catch(function (error) {
      alert('OOps something went wrong check your console');
      console.log(err);
    });
  }
  render() {
    return (
      <Layout>
        <Head>
          <title>Welcome to MusicJournal</title>
        </Head>
        <div>
          <Link href="/music-journal"><a>Go to MusicJournal</a></Link>
          <button onClick={this.handleSignIn}>Sign In using google</button>
        <button onClick={this.handleLogout}>Logout</button>
        </div>
        

      </Layout>
    )
  }
}

export default Home;