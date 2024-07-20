// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../media/GCLogoWhite.svg';

const Footer = () => {
  return (
    <footer className="footer text-white py-4">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 text-start">
                    <ul className="list-unstyled">
                        <li><Link to="/about-us" className="footer-link">ABOUT US</Link></li>
                        <li><Link to="/services" className="footer-link">SERVICES</Link></li>
                        <li><Link to="/gallery" className="footer-link">GALLERY</Link></li>
                        <li><Link to="/garment-viewer" className="footer-link">GARMENT VIEWER</Link></li>
                    </ul>
                </div>
                <div className="col-md-2 text-start">
                    <ul className="list-unstyled">
                        <li><Link to="/workshops" className="footer-link">WORKSHOPS</Link></li>
                        <li><Link to="/shop" className="footer-link">SHOP</Link></li>
                        <li><Link to="/contact-us" className="footer-link">CONTACT US</Link></li>
                        <li><Link to="/book-consultation" className="footer-link">BOOK A CONSULTATION</Link></li>
                    </ul>
                </div>
                <div className="col-md-4 text-center">
                    <img src={logo} alt="Logo" className="footer-logo mb-2" />
                    <p>GRACILE COUTURE ©2024</p>
                </div>
                <div className="col-md-2 text-end">
                    <ul className="list-unstyled">
                        <li>123 STREET</li>
                        <li>CITY, PROVINCE</li>
                        <li>A1B 2C3</li>
                        <li>(123) 456-7890</li>
                    </ul>
                </div>
                <div className="col-md-2 text-end">
                    <ul className="list-unstyled">
                        <li>OFFICE HOURS</li>
                        <li className="footer-officehours">11AM - 6PM: MON - SAT</li>
                        <li className="footer-officehours">12PM - 5PM: SUN</li>
                        <li>FOR IN-OFFICE AND VIRTUAL HOURS</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
