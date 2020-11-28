import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap/'
import PropTypes from 'prop-types'

const AddMemory = ({ handleSubmit, text, setText, song, setSong }) => {
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
                            <Form.Control
                                as="textarea"
                                onChange={({ target }) => {
                                    setSong(target.value)
                                }}
                                rows="1"
                                value={song}
                            />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group controlId="formText">
                            <Form.Label>Write something about it</Form.Label>
                            <Form.Control
                                as="textarea"
                                onChange={({ target }) => setText(target.value)}
                                rows="3"
                                value={text}
                            />
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

AddMemory.propTypes = {
  handleSubmit: PropTypes.func,
  text: PropTypes.string,
  setText: PropTypes.func,
  song: PropTypes.text,
  setSong: PropTypes.func
}

export default AddMemory
