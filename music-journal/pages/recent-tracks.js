
import React from 'react';
import Layout from '../components/Layout';
import RecentTracks from '../components/RecentTracks';
import withAuth from '../src/withAuth';
import { Container, Row } from 'react-bootstrap/';

class Dashboard extends React.Component {
  render() {
    return (
      <Layout>
        <Container fluid>
          <Row xs={12} >
            <h1>Hi {this.props.user.displayName}!</h1>
          </Row>
          <hr />
          <Row>
              <RecentTracks />
          </Row>
        </Container>
      </Layout>
    )
  }
}
export default withAuth(Dashboard);