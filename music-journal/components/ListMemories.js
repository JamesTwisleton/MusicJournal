import { useEffect, useState } from 'react';
import { Row, Col, Table } from 'react-bootstrap/';

//TODO: Move to services
const fetcher = (url) =>
  fetch(url, {
    method: 'GET',
}).then((res) => res.json());

const ListMemories = ({ firebaseToken }) => {
  const [memories, setMemories] = useState({}); 

  useEffect(() => {
    fetcher('/api/list-memories').then((json) => {
      setMemories(json);
    });
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
              {memories.length > 0 && memories.map(memory => 
                <tr key={memory.song}>
                  <td>{memory.song}</td>
                  <td>{memory.text}</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Row>
      </Col>
    </>
  )
}

ListMemories.getInitialProps = async (ctx) => {
  const { firebaseToken } = cookies(ctx);
  if (!firebaseToken) {
    return {}
  }
  return { firebaseToken };
}

export default ListMemories;

// <Table striped bordered hover size="sm">
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Username</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>Mark</td>
//                 <td>Otto</td>
//                 <td>@mdo</td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td>Jacob</td>
//                 <td>Thornton</td>
//                 <td>@fat</td>
//               </tr>
//               <tr>
//                 <td>3</td>
//                 <td colSpan="2">Larry the Bird</td>
//                 <td>@twitter</td>
//               </tr>
//             </tbody>
//           </Table>