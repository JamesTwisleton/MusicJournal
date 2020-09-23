
import { Row, Col, Form, Button } from 'react-bootstrap/';

class AddMemory extends React.Component {

    render() {
        return (<>
                <Col xs={6}>
                    <Row className="justify-content-center" xs={12} >
                        <h4>Add a memory</h4>
                    </Row>
                    <Row className="justify-content-center">
                        <p>Select a song</p>
                    </Row>
                    <Row className="justify-content-center text-center">
                        <Form>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Write something</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                        </Form>

                    </Row>
                    <Row className="justify-content-center">
                        <Button>Submit!</Button>
                    </Row>
                </Col>
            
        </>)
    }
}

export default AddMemory;