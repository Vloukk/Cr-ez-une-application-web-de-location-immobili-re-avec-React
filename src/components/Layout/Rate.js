// Rate.js
import React from 'react';

const Rate = ({ nombreEtoiles }) => {
  const etoiles = [];

  for (let i = 0; i < 5; i++) {
    const classeEtoile = i < nombreEtoiles ? 'etoile-rouge' : 'etoile-grise';
    etoiles.push(<i key={i} className={`fa-solid fa-star ${classeEtoile}`}></i>);
  }

  return <div className="rate">{etoiles}</div>;
};

export default Rate;
