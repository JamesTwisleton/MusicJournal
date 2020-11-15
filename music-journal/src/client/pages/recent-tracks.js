import React from 'react';
import RecentTracks from '../components/RecentTracks';
import withAuth from '../services/withAuth';

const Dashboard = () => (
  <RecentTracks />
)
export default withAuth(Dashboard);
