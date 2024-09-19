import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  const [saveFiles, setSaveFiles] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/saveFiles')
      .then((response) => {
        setSaveFiles(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="homepage">
      <h1>Save Files</h1>
      <div className="save-file-list">
        {saveFiles.length > 0 ? (
          saveFiles.map((file) => (
            <Link
              to={`/save/${file.id}`}
              key={file.id}
              style={{
                color: 'inherit',
                textDecoration: 'inherit',
              }}
            >
              {' '}
              <Card key={file.id}>
                <h2>{file.title}</h2>
                <p>
                  <strong>Leader: </strong>
                  {file.description.leader}
                </p>
                <p>
                  <strong>Difficulty: </strong>
                  {file.description.difficulty}
                </p>
                <p>
                  <strong>Map: </strong>
                  {file.description.map}
                </p>
                <p>
                  <strong>Size: </strong>
                  {file.description.size}
                </p>
                <p>
                  <strong>Speed: </strong>
                  {file.description.speed}
                </p>
                <p>
                  <strong>Mods: </strong>
                  {file.description.mods}
                </p>
                <Button
                  text="Download"
                  onClick={() =>
                    console.log(`Download clicked for ${file.title}`)
                  }
                  variant="primary"
                />
              </Card>
            </Link>
          ))
        ) : (
          <p>Loading save files...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
