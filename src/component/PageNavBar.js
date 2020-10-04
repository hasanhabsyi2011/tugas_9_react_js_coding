import React from 'react';

import { Button, Form,
  Nav, Navbar, FormControl, NavDropdown
  }  from "react-bootstrap"



class PageNavBar extends React.Component{

render(){
  return (
    <>

    <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">Akses Sport</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Berita</Nav.Link>
            <Nav.Link href="/">Live Scores</Nav.Link>
            <NavDropdown title="Piala & Liga" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">Indonesia</NavDropdown.Item>
                  <NavDropdown.Item href="/">Inggris</NavDropdown.Item>
                  <NavDropdown.Item href="/">Italia</NavDropdown.Item>
            </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
      </Navbar.Collapse>
    </Navbar>

    </>
  )
 }
}
export default PageNavBar;
