import React from 'react'
import { Row, Col, Table } from 'react-bootstrap/'
import PropTypes from 'prop-types'

const ListMemories = ({ memories }) => {
  if (!memories || memories.length < 1) {
    return <p id="nomemories">You havent added any memories yet.....</p>
  }

  return (
    <>
      <Col xs={6}>
        <Row className="justify-content-center" xs={12} >
          <h4>Your Top Memories</h4>
        </Row>
        <Row className="justify-content-center">
          <Table striped bordered hover size="sm" id="memoriestable">
            <thead>
              <tr>
                <th>Song</th>
                <th>Memory</th>
              </tr>
            </thead>
            <tbody id="memoriestablebody">
              {memories && Object.values(memories).map(({ song, text }) =>
                <tr key={song}>
                  <td>{song}</td>
                  <td>{text}</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Row>
      </Col>
    </>
  )
}

ListMemories.propTypes = {
  memories: PropTypes.object
}

export default ListMemories
