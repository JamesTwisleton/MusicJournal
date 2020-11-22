import { Row, Col, Form, Button } from 'react-bootstrap/';
import withAuth from '../utils/withAuth';
import submitMemory from '../utils/submitMemory';
const AddMemory = (props) => {
    const addMemory = () => {
        submitMemory({
            song: document.getElementById("song").value,
            memorytext: document.getElementById("memorytext").value,
        }, props.token);
    }

    return (<>
        <Col xs={12} sm={6}>
            <Row className="justify-content-center" xs={12} >
                <h4>Add a memory</h4>
            </Row>
            <Row className="justify-content-center text-center">
                <Form>
                    <Row className="justify-content-center">
                        <Form.Group>
                            <Form.Label>Write a song name</Form.Label>
                            <Form.Control id="song" as="textarea" rows="1" />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group>
                            <Form.Label>Write something about it</Form.Label>
                            <Form.Control id="memorytext" as="textarea" rows="3" />
                        </Form.Group>
                    </Row>
                </Form>
            </Row>
            <Row className="justify-content-center">
                <Button onClick={() => addMemory()}>Submit!</Button>
            </Row>
        </Col>
    </>)
}

export default withAuth(AddMemory);
