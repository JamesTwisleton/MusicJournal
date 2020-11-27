import React from 'react'
import Layout from '../components/Layout'
import TopTracks from '../components/TopTracks'
import withAuth from '../utils/withAuth'

const Dashboard = (props) => {
    return (
        <Layout>
            <TopTracks {...props} />
        </Layout>
    )
}

export default withAuth(Dashboard)
