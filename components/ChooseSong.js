import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table, Form } from 'react-bootstrap/'
// import PropTypes from 'prop-types'
import { searchSpotifyTracks } from '../utils/fetcher'
import useAuth from '../utils/useAuth'

const ChooseSong = () => {
  const [loaded, token] = useAuth()
  const [song, setSong] = useState('')
  const [searchResults, setSearchResults] = useState()

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

  if (!loaded) {
    return <p>Loading...</p>
  }

  return (
    <Container>
      <Col xs={6}>
        <Row className="justify-content-center text-center">
          <Form>
            <Row className="justify-content-center">
              <Form.Group controlId="formSong">
                <Form.Label>Start typing a song name...</Form.Label>
                <Form.Control
                  as="textarea"
                  onChange={({ target }) => setSong(target.value)}
                  rows="1"
                  value={song}
                />
              </Form.Group>
            </Row>
          </Form>
        </Row>
        <Row className="justify-content-center">
          {/* <Button onClick={(event) => handleSubmit(event)}>Submit!</Button> */}
        </Row>
      </Col>
      <Col xs={6}>
        <Row className="justify-content-center" xs={12} >
          <h4>Suggested songs</h4>
        </Row>
        <Row className="justify-content-center">
          <Table striped bordered hover size="sm" id="searchresultstable">
            <thead>
              <tr>
                <th>Song</th>
              </tr>
            </thead>
            <tbody id="searchresultstablebody">
              {searchResults && Object.values(searchResults).map((song) =>
                <tr key={song}>
                  <td>{song.trackName}</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Row>
      </Col>
    </Container>
  )
}

// AddMemory.propTypes = {
//   handleSubmit: PropTypes.func,
//   text: PropTypes.string,
//   setText: PropTypes.func,
//   song: PropTypes.string,
//   setSong: PropTypes.func
// }

export default ChooseSong
