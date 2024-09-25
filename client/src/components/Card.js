import React from 'react';
import './Card.css';

const Card = ({
  title,
  leader,
  difficulty,
  speed,
  map,
  mapSize,
  startLocationImage,
}) => {
  return (
    <div className="save-file-card">
      {startLocationImage && (
        <div className="card-image">
          <img src={startLocationImage} alt="Start Location" />
        </div>
      )}
      <div className="card-content">
        <h2 className="save-title">{title}</h2>
        <p className="leader-info">
          <strong>Leader: </strong> {leader}
        </p>
        <p className="difficulty-info">
          <strong>Difficulty: </strong> {difficulty}
        </p>
        <p className="speed-info">
          <strong>Speed: </strong> {speed}
        </p>
        <p className="map-info">
          <strong>Map: </strong> {map}
        </p>
        <p className="map-size-info">
          <strong>Map Size: </strong> {mapSize}
        </p>
      </div>
    </div>
  );
};

export default Card;
