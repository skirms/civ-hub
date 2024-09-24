import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ filters, setFilters }) => {
  const [openFilters, setOpenFilters] = useState({
    civilization: false,
    leader: false,
    difficulty: false,
    gameSpeed: false,
    mapSize: false,
  });

  const toggleDropdown = (filterKey) => {
    setOpenFilters((prevOpenFilters) => ({
      ...prevOpenFilters,
      [filterKey]: !prevOpenFilters[filterKey],
    }));
  };

  const handleFilterChange = (e, filterKey) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (isChecked) {
        updatedFilters[filterKey] = [
          ...(updatedFilters[filterKey] || []),
          value,
        ];
      } else {
        updatedFilters[filterKey] = updatedFilters[filterKey].filter(
          (item) => item !== value
        );
      }
      return updatedFilters;
    });
  };

  const handleResetFilters = () => {
    setFilters({
      civilization: [],
      leader: [],
      difficulty: [],
      gameSpeed: [],
      mapSize: [],
    });
  };

  return (
    <div className="filter">
      {/* Civilization Filter */}
      <div className="filter-group">
        <h4 onClick={() => toggleDropdown('civilization')}>Civilization</h4>
        {openFilters.civilization && (
          <div className="filter-options">
            {[
              'Arabia',
              'Australia',
              'Aztec',
              'Babylon',
              'Brazil',
              'Byzantium',
              'Canada',
              'China',
              'Cree',
              'Egypt',
              'England',
              'Ethiopia',
              'France',
              'Gaul',
              'Germany',
              'Gran Colombia',
              'Greece',
              'Hungary',
              'India',
              'Indonesia',
              'Japan',
              'Khmer',
              'Kongo',
              'Korea',
              'Macedon',
              'Mali',
              'Mapuche',
              'Maori',
              'Maya',
              'Mongolia',
              'Netherlands',
              'Nubia',
              'Ottoman Empire',
              'Persia',
              'Phoenicia',
              'Portugal',
              'Rome',
              'Scotland',
              'Spain',
              'Sumeria',
              'Sweden',
              'United States',
              'Vietnam',
              'Zulu',
            ].map((civ) => (
              <label key={civ}>
                <input
                  type="checkbox"
                  name="civilization"
                  id={`filter-civilization-${civ}`}
                  value={civ}
                  checked={filters.civilization.includes(civ)}
                  onChange={(e) => handleFilterChange(e, 'civilization')}
                />
                {civ}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Leader Filter */}
      <div className="filter-group">
        <h4 onClick={() => toggleDropdown('leader')}>Leader</h4>
        {openFilters.leader && (
          <div className="filter-options">
            {[
              'Abraham Lincoln',
              'Alexander',
              'Ambiorix',
              'Amanitore',
              'Bà Triệu',
              'Basil II',
              'Catherine de Medici',
              'Chandragupta',
              'Cleopatra',
              'Cyrus',
              'Dido',
              'Eleanor of Aquitaine',
              'Elizabeth I',
              'Frederick Barbarossa',
              'Gandhi',
              'Genghis Khan',
              'Gilgamesh',
              'Gitarja',
              'Gorgo',
              'Hammurabi',
              'Harald Hardrada',
              'Hojo Tokimune',
              'John Curtin',
              'João III',
              'Julius Caesar',
              'Jayavarman VII',
              'Kristina',
              'Kublai Khan',
              'Kupe',
              'Lautaro',
              'Lady Six Sky',
              'Mansa Musa',
              'Matthias Corvinus',
              'Menelik II',
              'Montezuma',
              'Mvemba a Nzinga',
              'Napoleon Bonaparte',
              'Nader Shah',
              'Pedro II',
              'Pericles',
              'Poundmaker',
              'Qin Shi Huang',
              'Ramesses II',
              'Robert the Bruce',
              'Saladin',
              'Sejong',
              'Shaka',
              'Simon Bolívar',
              'Suleiman',
              'Sundiata Keita',
              'Suleiman the Magnificent',
              'Tamar',
              'Teddy Roosevelt',
              'Theodora',
              'Trajan',
              'Victoria',
              'Wilfrid Laurier',
              'Wu Zetian',
            ].map((leader) => (
              <label key={leader}>
                <input
                  type="checkbox"
                  name="leader"
                  id={`filter-leader-${leader}`}
                  value={leader}
                  checked={filters.leader.includes(leader)}
                  onChange={(e) => handleFilterChange(e, 'leader')}
                />
                {leader}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Difficulty Filter */}
      <div className="filter-group">
        <h4 onClick={() => toggleDropdown('difficulty')}>Difficulty</h4>
        {openFilters.difficulty && (
          <div className="filter-options">
            {[
              'Settler',
              'Chieftain',
              'Warlord',
              'Prince',
              'King',
              'Emperor',
              'Immortal',
              'Deity',
            ].map((difficulty) => (
              <label key={difficulty}>
                <input
                  type="checkbox"
                  name="difficulty"
                  id={`filter-difficulty-${difficulty}`}
                  value={difficulty}
                  checked={filters.difficulty.includes(difficulty)}
                  onChange={(e) => handleFilterChange(e, 'difficulty')}
                />
                {difficulty}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Game Speed Filter */}
      <div className="filter-group">
        <h4 onClick={() => toggleDropdown('gameSpeed')}>Game Speed</h4>
        {openFilters.gameSpeed && (
          <div className="filter-options">
            {['Online', 'Quick', 'Standard', 'Epic', 'Marathon'].map(
              (speed) => (
                <label key={speed}>
                  <input
                    type="checkbox"
                    name="gameSpeed"
                    id={`filter-speed-${speed}`}
                    value={speed}
                    checked={filters.gameSpeed.includes(speed)}
                    onChange={(e) => handleFilterChange(e, 'gameSpeed')}
                  />
                  {speed}
                </label>
              )
            )}
          </div>
        )}
      </div>

      {/* Map Size Filter */}
      <div className="filter-group">
        <h4 onClick={() => toggleDropdown('mapSize')}>Map Size</h4>
        {openFilters.mapSize && (
          <div className="filter-options">
            {[
              'Duel',
              'Tiny',
              'Small',
              'Standard',
              'Large',
              'Huge',
              'Enormous',
              'Giant',
            ].map((size) => (
              <label key={size}>
                <input
                  type="checkbox"
                  name="mapSize"
                  id={`filter-size-${size}`}
                  value={size}
                  checked={filters.mapSize.includes(size)}
                  onChange={(e) => handleFilterChange(e, 'mapSize')}
                />
                {size}
              </label>
            ))}
          </div>
        )}
      </div>
      <button className="reset-filters" onClick={handleResetFilters}>
        Reset Filters
      </button>
    </div>
  );
};

export default Filter;
