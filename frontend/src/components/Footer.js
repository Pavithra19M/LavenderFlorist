import React from 'react';
import { Row, Col } from 'react-bootstrap';


const Footer = () => {

    const currentYear = new Date().getFullYear()

  return (
        <Row>
            <Col className='text-center'>
                <p>LavenderFlorist &copy; {currentYear}</p>
            </Col>
        </Row>
    
  )
}

export default Footer