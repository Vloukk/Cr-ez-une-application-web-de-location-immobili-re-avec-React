import React, { useState } from 'react';


const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span>
          {isOpen ? (
            <i className="fas fa-chevron-down"></i>
          ) : (
            <i className="fas fa-chevron-up"></i>
          )}
        </span>
      </div>
      {isOpen && <div className="collapse__content"><p>{content}</p></div>}
    </div>
  );
};

export default Collapse;