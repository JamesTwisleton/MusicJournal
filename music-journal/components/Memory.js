import React, { useEffect, useState } from 'react';
import withAuth from '../utils/withAuth';
import AddMemory from '../components/AddMemory'
import ListMemories from '../components/ListMemories'
import { addMemory, getMemories } from '../utils/fetcher';

const Memory = (props) => {
    const [memories, setMemories] = useState()
    const [text, setText] = useState('')
    const [song, setSong] = useState('')

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

    return (<>
        <AddMemory
            {...props}
            handleSubmit={handleSubmit}
            text={text}
            setText={setText}
            song={song}
            setSong={setSong}
        />
        <ListMemories memories={memories} />
    </>
    )

}

export default withAuth(Memory);
