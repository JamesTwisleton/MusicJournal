
import { Row, Col, Form, Button } from 'react-bootstrap/';

class AddMemory extends React.Component {

    submitForm() {
        let form = document.getElementById('memoryForm');
        form.submit();
    }

    render() {
        return (<>
            <Col xs={6}>
                <Row className="justify-content-center" xs={12} >
                    <h4>Add a memory</h4>
                </Row>
                <Row className="justify-content-center text-center">
                    <Form id="memoryForm" method="post" action="api/save-memory">
                        <Row className="justify-content-center">
                            <Form.Group controlId="memoryForm.ControlTextarea1">
                                <Form.Label>Write a song name</Form.Label>
                                <Form.Control name="song" as="textarea" rows="1" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group controlId="memoryForm.ControlTextarea1">
                                <Form.Label>Write something about it</Form.Label>
                                <Form.Control name="content" as="textarea" rows="3" />
                            </Form.Group>
                        </Row>
                    </Form>

                </Row>
                <Row className="justify-content-center">
                    <Button onClick={this.submitForm}>Submit!</Button>
                </Row>
            </Col>
        </>)
    }
}

export default AddMemory;