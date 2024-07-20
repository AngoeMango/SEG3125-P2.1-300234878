import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './ChatInterface.css';

const predefinedResponses = {
    hello: "Hi there! How can I assist you with your fashion needs today?",
    pricing: "Our pricing varies based on the type of garment and customization. Could you please specify the type of garment you're interested in?",
    designer: "Sure! Our designer is available for consultations from 10 AM to 6 PM, Monday to Friday.",
    default: "I'm sorry, I didn't quite understand that. Could you please rephrase?"
};

const ChatInterface = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');

    const handleSendMessage = () => {
        if (userInput.trim()) {
        const newMessages = [...messages, { sender: 'user', text: userInput }];
        setMessages(newMessages);

        const lowerCaseInput = userInput.trim().toLowerCase();
        const response = predefinedResponses[lowerCaseInput] || predefinedResponses.default;
        setMessages([...newMessages, { sender: 'bot', text: response }]);
        setUserInput('');
        }
    };

    return (
        <Container className="chat-interface mt-5">
        <h1 className="text-center">Live Chat with Our Designer</h1>
        <div className="chat-box">
            {messages.map((message, index) => (
            <div key={index} className={`chat-message ${message.sender}`}>
                <span>{message.text}</span>
            </div>
            ))}
        </div>
        <Form>
            <Row>
            <Col xs={9}>
                <Form.Control
                type="text"
                placeholder="Type your message..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSendMessage();
                    }
                }}
                />
            </Col>
            <Col xs={3}>
                <Button variant="primary" className="btn custom-submit-btn" onClick={handleSendMessage}>
                Send
                </Button>
            </Col>
            </Row>
        </Form>
        </Container>
    );
};

export default ChatInterface;
