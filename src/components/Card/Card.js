import React from 'react';


function Card({image, title}) {
    return (
        <div className="logement__card">
            <img src={image} alt={title} className="card__img" />
            <div className="logement__details">
                <h2 className="logement__title">{title}</h2>
            </div>
        </div>
    );
}

export default Card;
