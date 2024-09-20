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
              to={`/save/${file._id}`}
              key={file._id}
              style={{
                color: 'inherit',
                textDecoration: 'inherit',
              }}
            >
              <Card title={file.title}>
                {' '}
                <p>
                  <strong>Leader: </strong>
                  <span className="leader-info">{file.leader}</span>
                </p>
                <p>
                  <strong>Difficulty: </strong>
                  <span className="difficulty-info">{file.gameDifficulty}</span>
                </p>
                <p>
                  <strong>Map: </strong>
                  <span className="map-info">{file.map}</span>
                </p>
                <Button text="View Details" variant="primary" />
              </Card>
            </Link>
          ))
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
};

export default Home;
