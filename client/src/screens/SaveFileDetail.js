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
      .get(`http://localhost:3001/api/saveFiles`)
      .then((response) => {
        const file = response.data.find((file) => file.id === parseInt(id));
        setSaveFile(file);
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
      <h2>{saveFile.title}</h2>
      <p>
        <strong>Leader: </strong>
        {saveFile.description.leader}
      </p>
      <p>
        <strong>Difficulty: </strong>
        {saveFile.description.difficulty}
      </p>
      <p>
        <strong>Map: </strong>
        {saveFile.description.map}
      </p>
      <p>
        <strong>Size: </strong>
        {saveFile.description.size}
      </p>
      <p>
        <strong>Speed: </strong>
        {saveFile.description.speed}
      </p>
      <p>
        <strong>Mods: </strong>
        {saveFile.description.mods}
      </p>
      <Button
        text="Download"
        onClick={() => console.log(`Download ${saveFile.title}`)}
        variant="primary"
      />
    </div>
  );
};

export default SaveFileDetail;
