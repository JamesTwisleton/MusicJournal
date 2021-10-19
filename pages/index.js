import React from 'react'
import Layout from '../components/Layout'
import RecentTracks from '../components/RecentTracks'

const Dashboard = () => (
  <Layout>
    <RecentTracks />
  </Layout>
)

Dashboard.isAuthorized = (__session) => !!__session

export default Dashboard
