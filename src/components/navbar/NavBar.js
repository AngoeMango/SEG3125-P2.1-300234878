// src/components/navbar/NavBar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../media/GCLogo.svg';
import LinkDropdown from './LinkDropdown'; // Import the LinkDropdown component

const NavBar = () => {
  const galleryItems = [
    { label: 'Collections', link: '/gallerypages/collections' },
    { label: 'Fabrics', link: '/gallerypages/fabrics' },
  ];

  return (
    <Navbar expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <LinkDropdown title="Gallery" link="/gallery" items={galleryItems} />
          <Nav.Link as={Link} to="/garment-viewer">Garment Viewer</Nav.Link>
          <Nav.Link as={Link} to="/workshops">Workshops</Nav.Link>
          <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
          <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
          <Nav.Link as={Link} to="/book-consultation">Book a Consultation</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
