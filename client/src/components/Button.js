import React from 'react';
import './Button.css';

const Button = ({ text, onClick, variant }) => {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
