import React, { useState } from 'react';


const Collapse = ({ title, content, isColumn }) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log('Type de content:', typeof content);
  console.log('Contenu:', content);

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span className={`collapse__icon ${isOpen ? 'open' : 'closed'}`}>
            <i className="fas fa-chevron-down"></i>
        </span>
      </div>
      {isOpen && (
        <div className='collapse__content'>
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Collapse;