import React from 'react';
import Layout from '../components/Layout';
import AddMemory from '../components/AddMemory';
import ListMemories from '../components/ListMemories';
import withAuth from '../utils/withAuth';
import { firebase } from '../utils/initFirebase';
import { Container, Row } from 'react-bootstrap/';

const Dashboard = ({ user }) => {
    return (
        <Layout>
            <Container>
                <Row className="justify-content-center" xs={12} >
                    <h1>Hi {user.displayName}!</h1>
                </Row>
                <hr />
                <Row>
                    <AddMemory />
                    <ListMemories />
                </Row>
            </Container>
        </Layout>
    )
}

Dashboard.getInitialProps = async (ctx) =>  {
    const user = firebase.auth().currentUser;
    if (!user) {
      return {};
    }
    return { user };
  }

export default withAuth(Dashboard); 
