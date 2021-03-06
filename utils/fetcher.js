import axios from 'axios'

const fetcher = async (url) => {
  return await axios.get(url)
}

const getMemories = async (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }
  const response = await axios.get('/api/list-memories', config)
  return response.data
}

const searchSpotifyTracks = async (search, limit, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }
  const response = await axios.get(`/api/search-spotify-tracks?search=${search}&limit=${limit}`, config)
  return response.data
}

const addMemory = async (memory, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }

  const response = await axios.post('/api/save-memory', memory, config)
  return response.data
}

const getTopTracks = async (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }

  const response = await axios.get('/api/top-tracks-from-spotify', config)
  return response.data
}

const getRecentTracks = async (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }

  const response = await axios.get('/api/recent-tracks-from-spotify', config)
  return response.data
}

export {
  fetcher,
  getMemories,
  addMemory,
  getTopTracks,
  searchSpotifyTracks,
  getRecentTracks
}
