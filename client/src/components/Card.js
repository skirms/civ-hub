import React from 'react';
import './Card.css';

const Card = ({ title, children }) => {
  return (
    <div className="save-file-card">
      {' '}
      <h2>{title}</h2>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
