// src/components/navbar/LinkDropdown.js
import React, { useState } from 'react';
import { NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LinkDropdown = ({ title, link, items }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="nav-item dropdown">
        <Nav.Link as={Link} to={link} className="nav-link" id="navbarDropdown" role="button">
            {title}
        </Nav.Link>
        <NavDropdown show={showDropdown} className="dropdown-menu" aria-labelledby="navbarDropdown">
            {items.map((item, index) => (
            <NavDropdown.Item key={index} as={Link} to={item.link}>
                {item.label}
            </NavDropdown.Item>
            ))}
        </NavDropdown>
        </div>
    );
};

export default LinkDropdown;
