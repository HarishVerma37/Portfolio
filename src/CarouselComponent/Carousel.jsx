

import React, { useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  // Array of image URLs
  const images = [
    "https://via.placeholder.com/600x300/33FF57/FFFFFF?text=Image+2",
    "https://via.placeholder.com/600x300/3357FF/FFFFFF?text=Image+3",
    "https://via.placeholder.com/600x300/FF33A6/FFFFFF?text=Image+4",
     "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Image+1",
    "https://via.placeholder.com/600x300/33FF57/FFFFFF?text=Image+2",
    "https://via.placeholder.com/600x300/3357FF/FFFFFF?text=Image+3",
    "https://via.placeholder.com/600x300/FF33A6/FFFFFF?text=Image+4",
  ];

  // State to track current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to previous image
  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Navigate to next image
  const goNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container cr" id="a">
      <div className="carousel-container">
      <div className="carousel">
        <div className="prev" onClick={goPrev}>Prev</div>
        <div className="next" onClick={goNext}>Next</div>

        <ul className="carousel-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <li key={index} className="carousel-image">
              <video src={image} width="100%" autoPlay muted alt={`Slide ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Carousel;
