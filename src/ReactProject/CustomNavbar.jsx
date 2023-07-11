import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./CustomNavbar.css";

function CustomNavbar() {
  return (
    <Navbar className='navbar' variant='dark' expand='sm' fixed='top'>
      <Navbar.Brand>
        <img
          alt='ReactJS Logo'
          src='https://img.icons8.com/clouds/200/null/react.png'
          className='d-inline-block align-center'
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='navbar-nav' />
      <Navbar.Collapse id='navbar-nav'>
        <Nav className='flex-end'>
          <Nav.Link href='#header'>Home</Nav.Link>
          <Nav.Link href='#biography'>Biography</Nav.Link>
          <Nav.Link href='#experience'>Experience</Nav.Link>
          <Nav.Link href='#contact'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
