import React from 'react'
import Map from '../components/Map'

const MapPage = () => (
  <Map />
)

MapPage.isAuthorized = (__session) => !!__session

export default MapPage
