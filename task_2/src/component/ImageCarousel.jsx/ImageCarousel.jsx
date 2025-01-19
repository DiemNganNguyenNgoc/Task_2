import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';

const ImageCarousel = ({ images, settings }) => {
  return (
    <div className="image-carousel">
      <Slider
        {...settings}
        nextArrow={<div className="next-arrow">Next</div>}
        prevArrow={<div className="prev-arrow">Prev</div>}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-item"
            style={{
              marginTop: index % 2 === 0 ? '30px' : '0px', // Stagger images vertically
            }}
          >
            <img
              src={image}
              alt={`Carousel ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
