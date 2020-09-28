
import { Row, Col, Table } from 'react-bootstrap/';


const fetcher = (url) =>
  fetch(url, {
    method: 'GET',
  }).then((res) => res.json());


class ListMemories extends React.Component {
  static async getInitialProps(ctx) {
    const { firebaseToken } = cookies(ctx);
    if (!firebaseToken) {
      return {}
    }
    return { firebaseToken };
  }


  constructor(props) {
    super(props);
    this.state = {};
  }

  populateMemoriesTable(memories) {
    document.getElementById("nomemories").remove();
    let tableBody = document.getElementById("memoriestablebody");
    let tableLength = 5;
    if(memories.length < 5) {
      tableLength = memories.length;
    }
    for (let i = 0; i < tableLength; i++) {
      let tableRow = document.createElement('tr');
      let songColumn = document.createElement('td');
      let memoryColumn = document.createElement('td');
      songColumn.innerHTML = memories[i].song;
      memoryColumn.innerHTML = memories[i].text;
      tableRow.appendChild(songColumn);
      tableRow.appendChild(memoryColumn);
      tableBody.appendChild(tableRow);
    }
  }

  componentDidMount() {
    fetcher('/api/list-memories').then((json) => {
      this.setState({
        "memories": json
      });
      if(this.state.memories.length) {
        this.populateMemoriesTable(this.state.memories);
      }
    });
  }

  render() {
    return (<>
      <Col xs={6}>
        <Row className="justify-content-center" xs={12} >
          <h4>Your Top Memories</h4>
        </Row>
        <Row className="justify-content-center">

          <p id="nomemories">You havent added any memories yet.....</p>

          <Table striped bordered hover size="sm" id="memoriestable">
            <thead>
              <tr>
                <th>Song</th>
                <th>Memory</th>
              </tr>
            </thead>
            <tbody id="memoriestablebody">
            </tbody>
          </Table>
        </Row>
      </Col>
    </>)
  }
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