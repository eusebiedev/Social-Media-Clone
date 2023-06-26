import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function Header() {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg" className="navbar">
        <Navbar.Brand href="#">Squisher</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="mr-auto">
            <Button variant="outline-primary" className="mx-2">Home</Button>
            <Button variant="outline-primary" className="mx-2">Notifications</Button>
            <Button variant="outline-primary" className="mx-2">Messages</Button>
          </Nav>
            <Form inline="true">
              <FormControl type="text" placeholder="Search..." className="mr-sm-2" />  
            </Form>
            <Button className="mx-2" variant="outline-success">Tweet</Button>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;