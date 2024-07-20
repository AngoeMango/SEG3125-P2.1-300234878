// src/components/FabricCard.js
import React from 'react';
import { Card } from 'react-bootstrap';

const FabricCard = ({ fabric }) => {
  return (
    <Card className="fabric-card">
      <Card.Img variant="top" src={fabric.image} alt={fabric.name} />
      <Card.Body>
        <Card.Title>{fabric.name}</Card.Title>
        <Card.Text>{fabric.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FabricCard;
