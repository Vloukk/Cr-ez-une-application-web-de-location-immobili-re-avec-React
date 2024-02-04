import React from 'react';
import { Link } from "react-router-dom";
import logementsData from '../../datas/logements.json';


function Gallery() {
  return (
    <div className="grid-container">
      {logementsData.map((logement) => (
        <article key={logement.id}>
        <Link to={`/logement/${logement.id}`}>
          
        </Link>
      </article>
      ))}
    </div>
  );
}

export default Gallery;