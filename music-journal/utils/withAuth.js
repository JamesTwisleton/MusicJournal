import React from 'react';
import router from 'next/router';
import auth from './auth';

const withAuth = (Component) => {

    return class extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                status: 'LOADING',
            }
        }
        async componentDidMount() {
            if (document.cookie) {
                const token = await auth(document.cookie);
                if (!token) {
                    router.push('/login');
                } else {                    
                    this.props.token = token;
                    this.setState({
                        status: 'SIGNED_IN'
                    });
                }
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
