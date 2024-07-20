// src/components/Collections.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PhotoCarousel from '../../components/carousel/PhotoCarousel';
import '../../styles/Collections.css';

const collectionsData = [
    {
        title: 'Sunkissed Elegance - SUMMER 2024',
        description: 'Step into the season of warmth and light with our Sunkissed Elegance collection. This formal summer wear line captures the essence of sophistication and comfort, perfect for any upscale summer event.',
        photos: [
        '../../media/SamplePhoto.png',
        '../../media/SamplePhoto.png',
        '../../media/SamplePhoto.png',
        '../../media/SamplePhoto.png',
        '../../media/SamplePhoto.png',
        '../../media/SamplePhoto.png'
        ]
    },
    {
        title: 'Timeless Romance - BRIDAL 2024',
        description: 'Embrace the magic of your special day with our Timeless Romance bridal collection. Designed to make your wedding dreams come true, each gown in this collection is a masterpiece of elegance and grace.',
        photos: [
        '../../media/SamplePhoto.png',
        '../../media/SamplePhoto.png',
        '../../media/SamplePhoto.png',
        '../../media/SamplePhoto.png',
        '../../media/SamplePhoto.png',
        '../../media/SamplePhoto.png'
        ]
    }

];

const Collections = () => {
    return (
        <Container className="collections-gallery mt-5">
            <h1 className="text-center">Gallery</h1>
            {collectionsData.map((collection, index) => (
            <div key={index} className="collection-section mb-5">
                <h3>{collection.title}</h3>
                <p>{collection.description}</p>
                <PhotoCarousel photos={collection.photos} photosPerSlide={3} />
            </div>
            ))}
        </Container>
    );
  };
  
  export default Collections;