
import { Row, Col } from 'react-bootstrap/';


const fetcher = (url) =>
  fetch(url, {
    method: 'GET',
  }).then((res) => res.json());


class ListMemories extends React.Component {
  static async getInitialProps(ctx) {
    const { firebaseToken } = cookies(ctx);
    console.log(firebaseToken);
    if (!firebaseToken) {
      return {}
    }
    return { firebaseToken };
  }


  constructor(props) {
    super(props);
    this.setState({
      json: {}
    });
  }

  componentDidMount() {
    // fetcher('/api/list-memories').then((json) => this.setState({
    //   "json": json
    // }));
    // fetcher('/api/list-memories').then((json) => {
    //   console.log('json is:' + json);
    //   console.log(...json);


    // }

    // );


  }

  render() {

    return (<>
      <Col xs={6}>
        <Row className="justify-content-center" xs={12} >
          <h4>Your memories</h4>
        </Row>
        <Row className="justify-content-center">
          <p></p>
          <p>You havent added any memories yet.....</p>
        </Row>
      </Col>
    </>)
  }
}

export default ListMemories;