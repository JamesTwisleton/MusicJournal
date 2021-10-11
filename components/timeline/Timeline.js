import React, { useEffect, useState } from 'react'
import { getRecentTracks } from '../../utils/fetcher'
import useAuth from '../../utils/useAuth'
import TimelineItem from './TimelineItem'
const Timeline = () => {
  const [loaded, token] = useAuth()
  const [recentTracks, setRecentTracks] = useState([])
  useEffect(() => {
    const initRecentTracks = async () => {
      try {
        const response = await getRecentTracks(token)
        setRecentTracks(response)
        console.log(recentTracks)
      } catch (error) {
        console.log('initRecentTracks', error)
      }
    }

    if (token) {
      initRecentTracks()
    }
  }, [token])


  if (!loaded) {
    return <p>Loading...</p>
  }
  return <TimelineItem timelineItemData={recentTracks[0]}/>
}

export default Timeline
