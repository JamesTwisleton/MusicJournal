import React from 'react';
import router from 'next/router';
import { firebase } from './initFirebase';
import cookies from 'next-cookies'

const withAuth = (Component) => {
    console.log(Component);

    return class extends React.Component {

        static async getInitialProps(ctx) {
            const user = firebase.auth().currentUser;
            console.log(user);
            return { user };
        }

        constructor(props) {
            super(props);
        
            this.state = {
                status: 'LOADING',
            }
        }

        componentDidMount() {
            if (this.props.user) {
                this.setState({
                    status: 'SIGNED_IN'
                });
            } else {
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
