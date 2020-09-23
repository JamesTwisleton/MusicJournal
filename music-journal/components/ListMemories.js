
import { Row, Col } from 'react-bootstrap/';

class ListMemories extends React.Component {

    render() {
        return (<>
                <Col xs={6}>
              <Row className="justify-content-center" xs={12} >
                <h4>Your memories</h4>
              </Row>
              <Row className="justify-content-center">
                <p>You haven't added any memories yet.</p>
              </Row>
            </Col>
        </>)
    }
}

export default ListMemories;