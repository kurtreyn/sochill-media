import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import navLogo from '../images/logo-sochill.png';

export default function NavComponent({ signUserOut, isAuth, setIsAuth }) {
  return (
    <>
      <Navbar className="custom-nav">
        <Container>
          <Navbar.Brand href="#home">
            <img src={navLogo} className="nav-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="/">Home</Nav.Link> */}
              {/* <Nav.Link href="/createpost">Create Post</Nav.Link> */}
              <Nav.Link href="" onClick={signUserOut}>
                Sign Out
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
