import React from 'react'
import Layout from '../components/Layout'
import Memory from '../components/Memory'

const Dashboard = () => (
  <Layout>
    <Memory />
  </Layout>
)

Dashboard.isAuthorized = (__session) => !!__session

export default Dashboard
