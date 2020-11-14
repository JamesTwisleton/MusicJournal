
import React from 'react';
import Layout from '../components/Layout';
import AddMemory from '../components/AddMemory';
import ListMemories from '../components/ListMemories';
import withAuth from '../src/withAuth';
import { Container, Row } from 'react-bootstrap/';
class Dashboard extends React.Component {

  render() {
    return (
      <Layout>
        <Container>
          <Row className="justify-content-center" xs={12} >
            <h1>Hi {this.props.user.displayName}!</h1>
          </Row>
          <hr />
          <Row>
              <AddMemory />
              <ListMemories/>
          </Row>
        </Container>
      </Layout>
    )
  }
}
export default withAuth(Dashboard);