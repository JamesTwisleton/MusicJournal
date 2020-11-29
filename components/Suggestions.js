import React from 'react'
import { Row, Col, Table } from 'react-bootstrap/'
import PropTypes from 'prop-types'

const Suggestions = ({ searchResults }) => {
  if (!searchResults || searchResults.length < 1) {
    return <p id="nomemories">Start typing a song to see suggestions!</p>
  }

  return (
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
  )
}

Suggestions.propTypes = {
  searchResults: PropTypes.array
}

export default Suggestions
