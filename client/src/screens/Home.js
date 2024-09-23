import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Filter from '../components/Filter';

const Home = () => {
  const [saveFiles, setSaveFiles] = useState([]);
  const [filters, setFilters] = useState({
    civilization: [],
    leader: [],
    difficulty: [],
    gameSpeed: [],
    mapSize: [],
  });

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

  const filteredSaveFiles = saveFiles.filter((file) => {
    const matchesCivilization =
      filters.civilization.length === 0 ||
      filters.civilization.includes(file.civilization);
    const matchesLeader =
      filters.leader.length === 0 || filters.leader.includes(file.leader);
    const matchesDifficulty =
      filters.difficulty.length === 0 ||
      filters.difficulty.includes(file.gameDifficulty);
    const matchesGameSpeed =
      filters.gameSpeed.length === 0 ||
      filters.gameSpeed.includes(file.gameSpeed);
    const matchesMapSize =
      filters.mapSize.length === 0 || filters.mapSize.includes(file.mapSize);

    return (
      matchesCivilization &&
      matchesLeader &&
      matchesDifficulty &&
      matchesGameSpeed &&
      matchesMapSize
    );
  });

  return (
    <div className="homepage">
      <div className="filter-container">
        <Filter filters={filters} setFilters={setFilters} />
      </div>
      <div className="save-file-list">
        {filteredSaveFiles.length > 0 ? (
          filteredSaveFiles.map((file) => (
            <Link
              to={`/save/${file._id}`}
              key={file._id}
              style={{
                color: 'inherit',
                textDecoration: 'inherit',
              }}
            >
              <Card title={file.title}>
                <p>
                  <strong>Leader: </strong>
                  {file.leader}
                </p>
                <p>
                  <strong>Difficulty: </strong>
                  {file.gameDifficulty}
                </p>
                <p>
                  <strong>Map: </strong>
                  {file.map}
                </p>
                <Button text="View Details" variant="primary" />
              </Card>
            </Link>
          ))
        ) : (
          <p>No save files match the selected criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
