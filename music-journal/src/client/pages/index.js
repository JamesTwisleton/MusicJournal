import React from 'react';
import RecentTracks from '../components/RecentTracks';
import withAuth from '../src/withAuth';

const Dashboard = () => {
  return (
    <RecentTracks />
  )
}
export default withAuth(Dashboard);
