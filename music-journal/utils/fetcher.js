import axios from 'axios'

const fetcher = async (url) => {
    return await axios.get(url)
}

const getMemories = async () => {
    const response = await axios.get('/api/list-memories')
    return response.data
}

const addMemory = async (memory, token) => {
    const response = await axios.post(`/api/save-memory?token=${token}`, memory)
    console.log('addMemory', response)
    return response.data
}

export { fetcher, getMemories, addMemory }
