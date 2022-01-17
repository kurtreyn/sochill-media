import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

import navLogo from '../images/logo-sochill.png';

export default function NavComponent(props) {
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
              <Nav.Link href="/dashboard">home</Nav.Link>
              <Nav.Link href="/createpost">create post</Nav.Link>
              {!props.isAuth ? (
                <Nav.Link href="/login">login</Nav.Link>
              ) : (
                <button>log out</button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
