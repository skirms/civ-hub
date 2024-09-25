import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './SaveFileDetail.css';
import Button from '../components/Button';

const SaveFileDetail = () => {
  const { id } = useParams();
  const [saveFile, setSaveFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  //

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

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="save-file-detail">
      <div className="detail-image">
        <img
          src={saveFile.startLocationImage}
          alt="Start Location"
          onClick={handleImageClick}
        />
      </div>

      <div className="detail-content">
        <h2>{saveFile.title}</h2>
        <p>
          <strong>Civilization: </strong>
          {saveFile.civilization}
        </p>
        <p>
          <strong>Leader: </strong>
          {saveFile.leader}
        </p>
        <p>
          <strong>Ruleset: </strong>
          {saveFile.ruleset}
        </p>
        <p>
          <strong>Game Difficulty: </strong>
          {saveFile.gameDifficulty}
        </p>
        <p>
          <strong>Game Speed: </strong>
          {saveFile.gameSpeed}
        </p>
        <p>
          <strong>Map: </strong>
          {saveFile.map}
        </p>
        <p>
          <strong>Map Size: </strong>
          {saveFile.mapSize}
        </p>

        {saveFile.startPositionBalance && (
          <p>
            <strong>Start Position Balance: </strong>
            {saveFile.startPositionBalance}
          </p>
        )}
        {saveFile.resourceQuantity && (
          <p>
            <strong>Resource Quantity: </strong>
            {saveFile.resourceQuantity}
          </p>
        )}

        <p>
          <strong>Description: </strong>
          {saveFile.description}
        </p>

        <Button
          text="Download"
          onClick={() => window.open(saveFile.saveFile, '_blank')}
          variant="primary"
        />
      </div>

      {isModalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <span className="close">&times;</span>
          <img
            className="modal-content"
            src={saveFile.startLocationImage}
            alt="Start Location"
          />
        </div>
      )}
    </div>
  );
};

export default SaveFileDetail;
