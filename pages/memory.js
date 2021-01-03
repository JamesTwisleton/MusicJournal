import React from 'react'
import Memory from '../components/Memory'

const Dashboard = () => {
  return (
    <>
      <Memory />
    </>
  )
}

Dashboard.isAuthorized = (__session) => !!__session

export default Dashboard
