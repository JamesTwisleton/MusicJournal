import React, { useEffect, useState } from 'react';
import { Row, Col, Table } from 'react-bootstrap/';
import { getMemories } from '../utils/fetcher';
import withAuth from '../utils/withAuth';

const ListMemories = () => {
  const [memories, setMemories] = useState({}); 

  useEffect(() => {
    getMemories()
      .then(response => setMemories(response))
      .catch(error => console.log(error))
  }, []);

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
              {memories.length > 0 && memories.map(({song, text}) => 
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

export default withAuth(ListMemories);
