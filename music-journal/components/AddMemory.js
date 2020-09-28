
import { Row, Col, Form, Button } from 'react-bootstrap/';

const submitMemory = (requestData) =>
    fetch('/api/save-memory', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    }).then((res) => {
        if(res.status === 200) {
            document.getElementById("song").value = "";
            document.getElementById("memorytext").value = "";
        }
    }
    );

class AddMemory extends React.Component {

    addMemory() {
        submitMemory({
            song: document.getElementById("song").value,
            memorytext: document.getElementById("memorytext").value
        });
        
        
        
    }

    render() {
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
                    <Button onClick={this.addMemory}>Submit!</Button>
                </Row>
            </Col>
        </>)
    }
}

export default AddMemory;