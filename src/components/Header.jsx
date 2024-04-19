// Header.jsx

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./Header.css"

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="ftco_navbar ftco-navbar-light site-navbar-target py-3 sticky-top" id="ftco-navbar">
      <Container>
        <Navbar.Brand href="#" className='text-2xl'>ThePortfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="ftco-nav" className="js-fh5co-nav-toggle fh5co-nav-toggle" />
        <Navbar.Collapse id="ftco-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home-section">Home</Nav.Link>
            <Nav.Link href="#about-section">About</Nav.Link>
            <Nav.Link href="#skills-section">Skills</Nav.Link>
            <Nav.Link href="#projects-section">Projects</Nav.Link>
            <Nav.Link href="#services-section">Services</Nav.Link>
            <Nav.Link href="#timeline-section">Timeline</Nav.Link>
            <Nav.Link href="#testimonial-section">Testimonial</Nav.Link>
            <Nav.Link href="#contact-section">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
