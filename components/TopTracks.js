import React, { useEffect, useState } from 'react'
import useAuth from '../utils/useAuth'
import { Container, Row, Card, CardColumns } from 'react-bootstrap/'
import { getTopTracks } from '../utils/fetcher'
import PropTypes from 'prop-types'

const TopTracks = () => {
  const [loaded, token] = useAuth()
  const [topTracks, setTopTracks] = useState()

  useEffect(() => {
    const initTopTracks = async () => {
      try {
        const response = await getTopTracks(token)
        setTopTracks(response)
      } catch (error) {
        console.log('top tracks', error)
      }
    }

    if (token) {
      initTopTracks()
    }
  }, [token])

  if (!loaded) {
    return <p>Loading...</p>
  }

  return (
    <Container>
      <Row className="justify-content-center" xs={12}>
        <h2>Top Tracks</h2>
      </Row>
      <Row className="justify-content-center">
        {!topTracks &&
          <Row>No top tracks yet...</Row>
        }
        <CardColumns>
          {topTracks && topTracks.map(({ album, name }) =>
            <Card key={name}>
              <Card.Img variant="top" src={album.images[0].url} />
              <Card.Title>{name}</Card.Title>
            </Card>
          )}
        </CardColumns>
      </Row>
    </Container>
  )
}

TopTracks.propTypes = {
  token: PropTypes.string

}

export default TopTracks
