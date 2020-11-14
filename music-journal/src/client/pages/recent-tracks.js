import React from 'react';
import RecentTracks from '../components/RecentTracks';
import withAuth from '../src/withAuth';

const Dashboard = () => (
  <RecentTracks />
)
export default withAuth(Dashboard);
