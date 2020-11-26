import React from 'react'
import TopTracks from '../components/TopTracks'
import withAuth from '../utils/withAuth'

const Dashboard = (props) => {
    return (
        <>
            <TopTracks {...props} />
        </>
    )
}

export default withAuth(Dashboard)
