import React, { useEffect, useState } from 'react';
import { getTopTracks } from '../utils/fetcher'

const TopTracks = (props) => {
    const [topTracks, setTopTracks] = useState()

    useEffect(() => {
        const initTopTracks = async () => {
            try {
                const response = await getTopTracks(props.token)
                setTopTracks(response)
            } catch (error) {
                console.log('top tracks', error)
            }
        }
        initTopTracks()
    }, [])

    if (!topTracks) {
        return <div>No top tracks yet...</div>
    }

    return (
        <div>
            <h2>Top Tracks</h2>
            {topTracks && topTracks.map(({name}) => <div key={name}>{name}</div>)}
        </div>
    )
}

export default TopTracks;
