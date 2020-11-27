import React, { useEffect, useState } from 'react';
import withAuth from '../utils/withAuth';
import AddMemory from '../components/AddMemory'
import ListMemories from '../components/ListMemories'
import Suggestions from '../components/Suggestions'
import { addMemory, getMemories, searchSpotifyTracks } from '../utils/fetcher';
import {  Row } from 'react-bootstrap/';
const Memory = (props) => {
    const [memories, setMemories] = useState()
    const [text, setText] = useState('')
    const [song, setSong] = useState('')
    const [searchResults, setSearchResults] = useState('')

    useEffect(async () => {
        try {
            const response = await getMemories(props.token)
            setMemories(response)
        } catch (error) {
            console.log(error)
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const newMemory = await addMemory({ song, text }, props.token)
            setSong('')
            setText('')
            setMemories({ ...memories, ...newMemory })
        } catch (error) {
            console.log('handle submit error', error)
        }
    }

    const handleAutocomplete = async () => {
        if (song.length > 2) {
            setSearchResults(await searchSpotifyTracks(song, 5, props.token))
        }
    }

    return (<>
        <Row>
            <AddMemory
                {...props}
                handleSubmit={handleSubmit}
                text={text}
                setText={setText}
                song={song}
                setSong={setSong}
                handleAutocomplete={handleAutocomplete} />
            <Suggestions searchResults={searchResults} />
        </Row>
        <ListMemories memories={memories} />
    </>
    )

}

export default withAuth(Memory);
