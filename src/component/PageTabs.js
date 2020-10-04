import React from 'react';
import {Container, Nav} from 'react-bootstrap';

function PageTabs(){
  return(
    <>
    <Container>


      <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
          <Nav.Link href="/home">Semua Transfer</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link eventKey="/Primer">Liga Primer Inggris</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link eventKey="/Serie">Serie A</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link eventKey="/Divisi">Divisi Primera</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link eventKey="/Bundes">Bundesliga</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link eventKey="/Liga">Liga 1 Indonesia</Nav.Link>
          </Nav.Item>
      </Nav>

    </Container>
    </>
  )
}
export default PageTabs;
