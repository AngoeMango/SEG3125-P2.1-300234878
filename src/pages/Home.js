// src/components/Home.js
import React from 'react';
import '../styles/Home.css';
import runway1 from '../media/videos/Runway1.mp4';

const Home = () => {
  return (
    <div className="home-container">
      <video autoPlay loop muted className="background-video">
        <source src={runway1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-text">
        <h1>ENTRER</h1>
        <p>Sew and Style with Grace and Beauty</p>
      </div>
    </div>
  );
};

export default Home;
