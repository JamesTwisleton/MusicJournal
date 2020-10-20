import React from 'react';
import Layout from '../components/Layout';
import RecentTracks from '../components/RecentTracks';
import withAuth from '../src/withAuth';
import { Container, Row } from 'react-bootstrap/';

class Dashboard extends React.Component {
  render() {
    return (
        <RecentTracks />
    )
  }
}
export default withAuth(Dashboard);