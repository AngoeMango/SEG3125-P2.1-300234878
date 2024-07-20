// src/components/PhotoCarousel.js
import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';

const PhotoCarousel = ({ photos, photosPerSlide }) => {
  const chunkedPhotos = [];
  for (let i = 0; i < photos.length; i += photosPerSlide) {
    chunkedPhotos.push(photos.slice(i, i + photosPerSlide));
  }

  return (
    <Carousel>
      {chunkedPhotos.map((photoGroup, index) => (
        <Carousel.Item key={index}>
          <Row>
            {photoGroup.map((photo, idx) => (
              <Col key={idx} xs={12} md={12 / photosPerSlide} className="d-flex justify-content-center">
                <img
                  className="d-block w-100"
                  src={photo}
                  alt={`Slide ${index}-${idx}`}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PhotoCarousel;

