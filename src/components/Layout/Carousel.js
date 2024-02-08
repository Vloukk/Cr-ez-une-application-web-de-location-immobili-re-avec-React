import React, { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Condition pour masquer les flèches et la numérotation si le carrousel contient une seule image
    const hideControls = images.length <= 1;

    return (
      <div className="carousel">
        {/* Condition pour afficher la flèche de gauche */}
        {!hideControls && (
          <span className="prev" onClick={prevSlide}><i className="fa-solid fa-chevron-left"></i></span>
        )}
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        {/* Condition pour afficher la flèche de droite */}
        {!hideControls && (
          <span className="next" onClick={nextSlide}><i className="fa-solid fa-chevron-right"></i></span>
        )}
        {/* Condition pour afficher la numérotation */}
        {!hideControls && (
          <div className="carousel__counter">{currentIndex + 1} / {images.length}</div>
        )}
      </div>
    );
  };
  
  export default Carousel;

