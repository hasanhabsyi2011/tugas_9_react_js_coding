import React from 'react';
import {Spinner, Container, Row, Col} from 'react-bootstrap';

function PageSpinner(){
  return(
    <>
            <Container>
                  <Row>
                    <Col md={11}><h3>Rumor Transfer Pemain</h3></Col>
                    <Col md={1}><Spinner animation="border" variant="success" /><Spinner animation="grow" variant="success" /></Col>
                  </Row>

          </Container>
    </>


  )
 }

export default PageSpinner;
