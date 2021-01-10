import React, { useEffect, useState } from 'react'
import { useAuth } from '../utils/useAuth'
import AddMemory from '../components/AddMemory'
import ListMemories from '../components/ListMemories'
import Suggestions from '../components/Suggestions'
import { addMemory, getMemories, searchSpotifyTracks } from '../utils/fetcher'
import { Row } from 'react-bootstrap/'
import PropTypes from 'prop-types'

const Memory = () => {
  const { data: { loaded, token } } = useAuth()
  const [memories, setMemories] = useState()
  const [text, setText] = useState('')
  const [song, setSong] = useState('')
  const [searchResults, setSearchResults] = useState()

  useEffect(() => {
    const initMemories = async () => {
      try {
        const response = await getMemories(token)
        setMemories(response)
      } catch (error) {
        console.log(error)
      }
    }

    if (token) {
      initMemories()
    }
  }, [token])

  useEffect(() => {
    const searchSpotify = async () => {
      if (song.length > 2) {
        try {
          const response = await searchSpotifyTracks(song, 5, token)
          setSearchResults(response)
        } catch (error) {
          console.log(error)
        }
      }
    }
    if (token) {
      searchSpotify()
    }
  }, [song, token])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const submitMemory = async () => {
      try {
        const newMemory = await addMemory({ song, text }, token)
        setSong('')
        setText('')
        setMemories({ ...memories, ...newMemory })
      } catch (error) {
        console.log('handle submit error', error)
      }
    }
    submitMemory()
  }

  if (!loaded) {
    return <p>Loading...</p>
  }

  return (<>
    <Row>
      <AddMemory
        handleSubmit={handleSubmit}
        text={text}
        setText={setText}
        song={song}
        setSong={setSong}
      />
      <Suggestions searchResults={searchResults} />
    </Row>
    <ListMemories memories={memories} />
  </>
  )
}

Memory.propTypes = {
  token: PropTypes.string
}

export default Memory
