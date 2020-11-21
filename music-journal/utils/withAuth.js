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
                const user = await auth(document.cookie);
                if (!user) {
                    router.push('/login');
                } else {                    
                    this.props.user = user;
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
