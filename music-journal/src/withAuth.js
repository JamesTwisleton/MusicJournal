import React from 'react';
import router from 'next/router';
import { firebase } from '.';
import { useCookies } from 'react-cookie';
import { app } from 'firebase';
import cookies from 'next-cookies'

const withAuth = (Component) => {

    return class extends React.Component {

        static async getInitialProps(ctx) {
            // calls page's `getInitialProps` and fills `appProps.pageProps`
            const { firebaseToken } = cookies(ctx);

            if (!firebaseToken) {
                  return {}
            }
            firebase.auth().signInWithCustomToken(firebaseToken)
                .catch(function (error) {
                    console.log(false);
                });

            const user = firebase.auth().currentUser;

            return { user };
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
                this.setState({
                    status: 'SIGNED_IN'
                });
            } else {
                console.log(false);
                router.push('/login');
            }
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
