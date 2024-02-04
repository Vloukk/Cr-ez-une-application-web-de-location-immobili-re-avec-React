import React from 'react';

function HeroBanner({ image, texte }) {
    return (
      <div className="Banner">
         <img className="banner__img" src={image} alt="Bannière" />
        <h1 className="banner__txt">{texte}</h1>
      </div>
    );
  }
  
  export default HeroBanner;