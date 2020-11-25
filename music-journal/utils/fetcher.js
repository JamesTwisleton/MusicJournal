import axios from 'axios'

const fetcher = async (url) => {
    return await axios.get(url)
}

const getMemories = async (token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const response = await axios.get('/api/list-memories', config)
    return response.data
}

const addMemory = async (memory, token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    console.log(memory);
    console.log(token);
    const response = await axios.post('/api/save-memory', memory, config);
    console.log('addMemory', response)
    return response.data
}

export { fetcher, getMemories, addMemory }
