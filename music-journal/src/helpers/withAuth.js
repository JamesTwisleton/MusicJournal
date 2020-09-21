import React from 'react';
import router from 'next/router';
import { firebase } from '../firebase';
import { useCookies } from 'react-cookie';
import { app } from 'firebase';
import cookies from 'next-cookies'

const withAuth = (Component) => {

    return class extends React.Component {

        static async getInitialProps(ctx) {
            // calls page's `getInitialProps` and fills `appProps.pageProps`
            const { firebaseToken } = cookies(ctx);
            
            // const res = await (await fetch(`http://localhost:3000/api/get-user?token=${firebaseToken}`)).json();

            // return { res }
            if(!firebaseToken) {
                return {};
            }
            firebase.auth().signInWithCustomToken(firebaseToken)
                .catch(function(error) {
                    console.log(false);
                });

            const user = firebase.auth().currentUser;

            return {user};
        }

        constructor(props) {
            super("authProps", props);
            this.state = {
                status: 'LOADING',
            }
        }
        
        componentDidMount() {
            if (this.props.user) {
                console.log(true);
            } else {
                console.log(false);
            }
            // auth.onAuthStateChanged(authUser => {
            //     if (authUser) {
            //         this.setState({
            //             status: 'SIGNED_IN'
            //         });
            //     } else {
            //         router.push('/login');
            //     }
            // });
        }
        renderContent() {
            const { status } = this.state;
            if (status == 'LOADING') {
                return <h1>Loading ......</h1>;
            } else if (status == 'SIGNED_IN') {
                return <Component {...this.props} />
            }
        }
        render() {
            return (
                <React.Fragment>
                    {this.renderContent()}
                </React.Fragment>
            );
        }
    };
}


export default withAuth;
