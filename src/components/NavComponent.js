// import React, { useState } from 'react';
// import { Navbar, Nav, Container, Button } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import { signOut } from 'firebase/auth';
// import { auth } from '../firebase-config';
// import navLogo from '../images/logo-sochill.png';

// export default function NavComponent({ isAuth, setIsAuth }) {
//   const navigate = useNavigate();

//   const signUserOut = () => {
//     signOut(auth).then(() => {
//       localStorage.clear();
//       setIsAuth(false);
//       navigate('/');
//     });
//   };
//   return (
//     <>
//       <Navbar className="custom-nav">
//         <Container>
//           <Navbar.Brand href="#home">
//             <img src={navLogo} className="nav-logo" />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="/">home</Nav.Link>
//               <Nav.Link href="/createpost">create post</Nav.Link>
//               <Nav.Link href="" onClick={signUserOut}>
//                 log out
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }
