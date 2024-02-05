import React from 'react';

const Host = ({ host }) => {
    return (
      <div className="host__info">
        <img className="host__picture" src={host.picture} alt="Host" />
        <p className="host__name">{host.name}</p>
      </div>
    );
  };

export default Host;