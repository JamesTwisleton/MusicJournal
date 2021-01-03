import React from 'react'
import RecentTracks from '../components/RecentTracks'

const Dashboard = () => {
  return (
    <RecentTracks />
  )
}

Dashboard.isAuthorized = (__session) => !!__session

export default Dashboard
