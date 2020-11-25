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
                try {
                    const [token, user] = await auth(document.cookie);
                    if (!token || !user) {
                        router.push('/login');
                    } else {                    
                        this.props.token = token;
                        this.props.user = user;
                        this.setState({
                            status: 'SIGNED_IN'
                        });
                    }
                } catch (error) {
                    console.log(error)
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
