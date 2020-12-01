import React from 'react'
import useAuth from '../utils/useAuth'
// import PropTypes from 'prop-types'
import { Row, Col, Container, Button } from 'react-bootstrap/'
import { useRouter } from 'next/router'

const RecordMemory = () => {
  useAuth()
  const router = useRouter()
  return (<>

    <Container>
      <style jsx global>{`
        .btn-block {
          height: 80vh;
          font-size: 10vh;
        }
      `}</style>
      <Row className="justify-content-center" xs={12}>
        <h1>Choose a way to record a musical memory</h1>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" size="lg" block onClick = {() => router.push('/record-memory/song')}>
            Start with a song
          </Button>

        </Col>
        <Col>
          <Button variant="secondary" size="lg" block>
            Start with a location
          </Button>
        </Col>
      </Row>

    </Container>

  </>)
}

// AddMemory.propTypes = {
//   handleSubmit: PropTypes.func,
//   text: PropTypes.string,
//   setText: PropTypes.func,
//   song: PropTypes.string,
//   setSong: PropTypes.func
// }

export default RecordMemory
