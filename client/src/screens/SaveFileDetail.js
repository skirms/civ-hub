import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './SaveFileDetail.css';
import Button from '../components/Button';

const SaveFileDetail = () => {
  const { id } = useParams();
  const [saveFile, setSaveFile] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/saveFiles/${id}`)
      .then((response) => {
        setSaveFile(response.data);
      })
      .catch((error) => {
        console.error('Error fetching save file details:', error);
      });
  }, [id]);

  if (!saveFile) {
    return <p>Loading...</p>;
  }

  return (
    <div className="save-file-detail">
      <div className="detail-image">
        <img src={saveFile.startLocationImage} alt="Start Location" />
      </div>
      <div className="detail-content">
        <h2>{saveFile.title}</h2>
        <p>
          <strong>Leader: </strong>
          <span className="leader-info">{saveFile.leader}</span>
        </p>
        <p>
          <strong>Difficulty: </strong>
          <span className="difficulty-info">{saveFile.gameDifficulty}</span>
        </p>
        <p>
          <strong>Map: </strong>
          <span className="map-info">{saveFile.map}</span>
        </p>
        <p>
          <strong>Map Size: </strong>
          {saveFile.mapSize}
        </p>
        <p>
          <strong>Game Speed: </strong>
          {saveFile.gameSpeed}
        </p>
        <p>
          <strong>Resource Quantity: </strong>
          {saveFile.resourceQuantity}
        </p>
        <p>
          <strong>Description: </strong>
          <span className="description">{saveFile.description}</span>
        </p>
      </div>

      <Button
        text="Download"
        onClick={() => window.open(saveFile.saveFile, '_blank')}
        variant="primary"
      />
    </div>
  );
};

export default SaveFileDetail;
