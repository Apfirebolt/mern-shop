import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const CheckoutSteps = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default CheckoutSteps
