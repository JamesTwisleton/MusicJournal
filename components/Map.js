import GoogleMapReact from 'google-map-react'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const MapItem = ({ text }) => (
  <div style={{
    color: 'white',
    background: 'purple',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
)

MapItem.propTypes = {
  text: PropTypes.string
}

const Map = () => {
  const [center, setCenter] = useState({ lat: 0, lng: 0 })
  const [zoom, setZoom] = useState(0)

  useEffect(() => {
    setCenter({ lat: 50.82551352099586, lng: -0.13538314692218156 })
    setZoom(0)
  }, [])

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_MAPS_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <MapItem
          lat={center.lat}
          lng={center.lng}
          text={'Music Journal'}
        />
      </GoogleMapReact>
    </div>
  )
}

export default Map
