import React from 'react'
import Layout from '../components/Layout'
import Map from '../components/map/Map'

const MapPage = () => (
  <Layout>
    <Map />
  </Layout>
)

MapPage.isAuthorized = (__session) => !!__session

export default MapPage
