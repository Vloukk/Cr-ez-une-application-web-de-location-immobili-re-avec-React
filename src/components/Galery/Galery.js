import React from 'react';
import { Link } from "react-router-dom";
import logementsData from '../../datas/logements.json';
import Card from '../../components/Card/Card';

function Gallery() {
  return (
    <div className="grid-container">
      {logementsData.map((logement) => (
        <article key={logement.id}>
        <Link to={`/logement/${logement.id}`}>
          <Card image={logement.cover} title={logement.title} />
        </Link>
      </article>
      ))}
    </div>
  );
}

export default Gallery;