import React from 'react';
import {Breadcrumb, Row, Col, Container} from 'react-bootstrap';

function PageBreadcrumb(){
  return(
    <>
    <Container>
    <Row>
      <Col></Col>
      <Col></Col>
      <Col md={4}>

            <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/">Liga Inggris</Breadcrumb.Item>
            <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
            </Breadcrumb>

      </Col>
      </Row>
    </Container>
    </>
  )
}
export default PageBreadcrumb;
