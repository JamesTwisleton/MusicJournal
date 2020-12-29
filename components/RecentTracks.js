import React, { useEffect, useState } from 'react'
import { getRecentTracks } from '../utils/fetcher'
import { useAuth } from '../utils/useAuth'
import PropTypes from 'prop-types'

const RecentTracks = () => {
  const { data: { loaded, token } } = useAuth()
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [recentTracks, setRecentTracks] = useState([])

  useEffect(() => {
    const initRecentTracks = async () => {
      try {
        const response = await getRecentTracks(token)
        setRecentTracks(response)
      } catch (error) {
        console.log('initRecentTracks', error)
      }
    }

    if (token) {
      initRecentTracks()
    }
  }, [token])

  const moveCarousel = (index) => {
    let nextIndex = carouselIndex + index

    if (nextIndex < 0) {
      nextIndex = recentTracks.length - 1
    }

    setCarouselIndex(nextIndex % recentTracks.length)
  }

  if (!loaded) {
    return <p>Loading...</p>
  }

  return (
    <div style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
      <div
        className="backgroundDiv"
        style={recentTracks.length > 0
          ? {
              animation: 'slideIn 3s linear 0s infinite alternate',
              background: `url(${recentTracks[carouselIndex].image.url}) center center/cover no-repeat fixed`,
              height: '100vh'
            }
          : {}
        }>
        <div style={{ height: '100%', width: '100%' }}>
          <div
            style={{ height: '100%', float: 'left', width: '50%' }}
            onClick={() => moveCarousel(-1)}
          />
          <div
            style={{ height: '100%', float: 'left', width: '50%' }}
            onClick={() => moveCarousel(1)}
          />
        </div>
      </div>

      <p style={{
        background: 'black',
        color: 'white',
        fontSize: '50px',
        textAlign: 'center',
        opacity: '.8',
        position: 'absolute',
        bottom: '0'
      }}>
        {recentTracks.length > 0 ? recentTracks[carouselIndex].description : ''}
      </p>
      <style global jsx>{`
            @keyframes slideIn {
              0% {
                transform: scale(1.2)
              }
              100% {
                transform: scale(1.0)
              }
            }
          `}
      </style>
    </div>
  )
}

RecentTracks.propTypes = {
  token: PropTypes.string
}

export default RecentTracks
