import React from 'react';
import './Card.css';

const Card = ({ title, children, startLocationImage }) => {
  return (
    <div className="save-file-card">
      <div className="card-image">
        <img src={startLocationImage} alt="Start Location" />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Card;
