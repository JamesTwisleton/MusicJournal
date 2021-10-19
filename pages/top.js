import React from 'react'
import Layout from '../components/Layout'
import TopTracks from '../components/TopTracks'

const Dashboard = () => {
  return (
    <Layout>
      <TopTracks />
    </Layout>
  )
}

Dashboard.isAuthorized = (__session) => !!__session

export default Dashboard
