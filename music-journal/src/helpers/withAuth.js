import React from 'react';
import router from 'next/router';
import { auth } from '../firebase';
import cookies from 'js-cookie';

// export const getUserFromCookie = () => {
//   const cookie = cookies.get('auth');
//   if (!cookie) {
//     return;
//   }
//   return JSON.parse(cookie);
// }

// export const removeUserCookie = () => cookies.remove('auth');

const withAuth = (Component) => {
    console.log('wowowowo');

    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                status: 'LOADING',
            }
        }
        componentDidMount() {
            auth.onAuthStateChanged(authUser => {
                console.log(authUser);
                if (authUser) {
                    this.setState({
                        status: 'SIGNED_IN'
                    });
                } else {
                    router.push('/login');
                }
            });
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
