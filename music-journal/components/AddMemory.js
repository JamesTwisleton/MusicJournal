import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap/';
import { addMemory } from '../utils/fetcher'
import withAuth from '../utils/withAuth';

const AddMemory = (props) => {
    const [song, setSong] = useState('')
    const [memoryText, setMemoryText] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        try {
            const response = await addMemory({ song, memoryText }, props.token)
            console.log('add memory response', response)
            setSong('')
            setMemoryText('')
            document.getElementById("songTextArea").value = '';
            document.getElementById("memoryTextArea").value = '';
        } catch (error) {
            console.log('handle submit error', error)
        }
    }

    return (<>
        <Col xs={12} sm={6}>
            <Row className="justify-content-center" xs={12} >
                <h4>Add a memory</h4>
            </Row>
            <Row className="justify-content-center text-center">
                <Form>
                    <Row className="justify-content-center">
                        <Form.Group controlId="formSong">
                            <Form.Label>Write a song name</Form.Label>
                            <Form.Control as="textarea" id="songTextArea" onChange={({target}) => setSong(target.value)} rows="1" />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group controlId="formMemoryText">
                            <Form.Label>Write something about it</Form.Label>
                            <Form.Control as="textarea" id="memoryTextArea" onChange={({target}) => setMemoryText(target.value)} rows="3" />
                        </Form.Group>
                    </Row>
                </Form>
            </Row>
            <Row className="justify-content-center">
                <Button onClick={(event) => handleSubmit(event)}>Submit!</Button>
            </Row>
        </Col>
    </>)
}

export default AddMemory;
