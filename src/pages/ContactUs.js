import React from 'react';
import { Container } from 'react-bootstrap';
import ChatInterface from '../components/chat/ChatInterface';
import '../styles/ContactUs.css';

const ContactUs = () => {
    return (
        <Container className="contact-us mt-5">
            <h1 className="text-center">Contact Us</h1>
            <p className="body">Chat live with one of our in-office team members or find our other contact information below!</p>
            <ChatInterface />
        </Container>
    );
};

export default ContactUs;
