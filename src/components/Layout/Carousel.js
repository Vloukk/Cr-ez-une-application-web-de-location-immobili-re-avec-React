import React, { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
      <div className="carousel">
        <span className="prev" onClick={prevSlide}><i class="fa-solid fa-chevron-left"></i></span>
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        <span className="next" onClick={nextSlide}><i class="fa-solid fa-chevron-right"></i></span>
      </div>
    );
  };
  
  export default Carousel;
