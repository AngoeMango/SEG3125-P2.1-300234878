// src/components/Gallery.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Gallery.css';

import CollectionsVideo from '../media/videos/Collections.mp4';
import FabricVideo from '../media/videos/Fabric.mp4';

const Gallery = () => {
  return (
    <div className="gallery-container">
        <div className="text-content">
            <h1 className="text-center">Gallery</h1>
            <p className="text-center">
            Welcome to the Collections Gallery, where we showcase the epitome of haute couture fashion. Each collection is a testament to our dedication to craftsmanship, creativity, and elegance. Delve into our curated selection of seasonal and thematic collections, each designed to captivate and inspire.
            </p>
        </div>
        <div className="video-container">
            <video className="video-background" autoPlay loop muted>
                <source src={CollectionsVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay">
                <Link to="/gallerypages/collections" className="overlay-button">View Collections</Link>
            </div>
        </div>
        <div className="text-content">
            <p className="text-center">
            Welcome to our Fabric Gallery, where you can explore the diverse and luxurious materials that form the foundation of our couture creations. Each fabric has its unique characteristics, bringing a distinct texture, sheen, and feel to our designs. Delve into the world of fabrics and learn about the qualities that make each one special, helping you make informed choices for your custom garments.
            </p>
        </div>
        <div className="video-container">
            <video className="video-background" autoPlay loop muted>
                <source src={FabricVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay">
                <Link to="/gallerypages/fabrics" className="overlay-button">View Fabric Gallery</Link>
            </div>
        </div>
    </div>
  );
};

export default Gallery;
