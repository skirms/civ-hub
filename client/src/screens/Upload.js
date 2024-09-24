import React, { useState } from 'react';
import axios from 'axios';
import './Upload.css';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const [formData, setFormData] = useState({
    title: '',
    civilization: '',
    leader: '',
    ruleset: 'Expansion: Gathering Storm',
    gameDifficulty: 'Deity',
    gameSpeed: 'Standard',
    map: '',
    mapSize: 'Standard',
    gameModes: [],
    startPositionBalance: 'Standard',
    resourceQuantity: 'Standard',
    description: '',
    mods: '',
    numberOfAICivilizations: 8,
    numberOfCityStates: 12,
    startEra: 'Ancient Era',
    victoryConditions: [
      'Culture Victory',
      'Diplomatic Victory',
      'Domination Victory',
      'Religious Victory',
      'Science Victory',
      'Score Victory',
    ],
    disasterIntensity: 2,
    worldAge: 'Standard',
    rainfall: 'Standard',
    coastalLowland: 'Map Generator',
    seaLevel: 'Standard',
    startPositionLink: 'Cultural',
    advancedOptions: [
      'No Duplicate Civilizations',
      'No Duplicate Leaders',
      'Teams Share Visibility',
    ],
    gameRandomSeed: '',
    mapRandomSeed: '',
    saveFile: null,
    startLocationImage: null,
  });

  const [showAdditionalSettings, setShowAdditionalSettings] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      startLocationImage: file,
    });
  };

  const handleToggleSettings = () => {
    setShowAdditionalSettings(!showAdditionalSettings);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked, value } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        [name]: [...formData[name], value],
      });
    } else {
      setFormData({
        ...formData,
        [name]: formData[name].filter((item) => item !== value),
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      saveFile: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sanitizedGameModes = formData.gameModes.filter(
      (mode) => mode.trim() !== ''
    );

    const data = new FormData();
    data.append('title', formData.title);
    data.append('civilization', formData.civilization);
    data.append('leader', formData.leader);
    data.append('ruleset', formData.ruleset);
    data.append('gameDifficulty', formData.gameDifficulty);
    data.append('gameSpeed', formData.gameSpeed);
    data.append('map', formData.map);
    data.append('mapSize', formData.mapSize);
    data.append(
      'gameModes',
      sanitizedGameModes.length > 0 ? sanitizedGameModes : []
    );

    data.append('description', formData.description);
    data.append('saveFile', formData.saveFile);
    data.append('startLocationImage', formData.startLocationImage);

    data.append('startPositionBalance', formData.startPositionBalance || '');
    data.append('resourceQuantity', formData.resourceQuantity || '');
    data.append('mods', formData.mods || '');
    data.append(
      'numberOfAICivilizations',
      formData.numberOfAICivilizations || ''
    );
    data.append('numberOfCityStates', formData.numberOfCityStates || '');
    data.append('startEra', formData.startEra || '');
    data.append('victoryConditions', formData.victoryConditions || '');
    data.append('disasterIntensity', formData.disasterIntensity || '');
    data.append('worldAge', formData.worldAge || '');
    data.append('rainfall', formData.rainfall || '');
    data.append('coastalLowland', formData.coastalLowland || '');
    data.append('seaLevel', formData.seaLevel || '');
    data.append('startPositionLink', formData.startPositionLink || '');
    data.append('advancedOptions', formData.advancedOptions || '');
    data.append('gameRandomSeed', formData.gameRandomSeed || '');
    data.append('mapRandomSeed', formData.mapRandomSeed || '');

    try {
      const response = await axios.post(
        'http://localhost:3001/api/saveFiles',
        data,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      setSuccessMessage('Save file uploaded successfully!');
      navigate(`/save/${response.data._id}`);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className="upload-page">
      <h2>Upload a Civilization 6 Save File</h2>
      {successMessage && (
        <p className="success-message">{successMessage}</p>
      )}{' '}
      <form className="upload-form" onSubmit={handleSubmit}>
        {/* Required Fields */}
        {/* Title Input */}
        <div className="form-group">
          <label htmlFor="title">Save File Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            maxLength={50}
          />
        </div>

        {/* Civilization Select */}
        <div className="form-group">
          <label htmlFor="civilization">Civilization</label>
          <select
            id="civilization"
            name="civilization"
            value={formData.civilization}
            onChange={handleChange}
            required
          >
            <option value="">Select Civilization</option>
            <option value="Arabia">Arabia</option>
            <option value="Australia">Australia</option>
            <option value="Aztec">Aztec</option>
            <option value="Babylon">Babylon</option>
            <option value="Brazil">Brazil</option>
            <option value="Byzantium">Byzantium</option>
            <option value="Canada">Canada</option>
            <option value="China">China</option>
            <option value="Cree">Cree</option>
            <option value="Egypt">Egypt</option>
            <option value="England">England</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="France">France</option>
            <option value="Gaul">Gaul</option>
            <option value="Germany">Germany</option>
            <option value="Gran Colombia">Gran Colombia</option>
            <option value="Greece">Greece</option>
            <option value="Hungary">Hungary</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Japan">Japan</option>
            <option value="Khmer">Khmer</option>
            <option value="Kongo">Kongo</option>
            <option value="Korea">Korea</option>
            <option value="Macedon">Macedon</option>
            <option value="Mali">Mali</option>
            <option value="Mapuche">Mapuche</option>
            <option value="Maori">Maori</option>
            <option value="Maya">Maya</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Nubia">Nubia</option>
            <option value="Ottoman Empire">Ottoman Empire</option>
            <option value="Persia">Persia</option>
            <option value="Phoenicia">Phoenicia</option>
            <option value="Portugal">Portugal</option>
            <option value="Rome">Rome</option>
            <option value="Scotland">Scotland</option>
            <option value="Spain">Spain</option>
            <option value="Sumeria">Sumeria</option>
            <option value="Sweden">Sweden</option>
            <option value="United States">United States</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Zulu">Zulu</option>
          </select>
        </div>

        {/* Leader Select */}
        <div className="form-group">
          <label htmlFor="leader">Leader</label>
          <select
            id="leader"
            name="leader"
            value={formData.leader}
            onChange={handleChange}
            required
          >
            <option value="">Select Leader</option>
            <option value="Abraham Lincoln – United States">
              Abraham Lincoln – United States
            </option>
            <option value="Alexander – Macedonia">Alexander – Macedonia</option>
            <option value="Ambiorix – Gaul">Ambiorix – Gaul</option>
            <option value="Amanitore – Nubia">Amanitore – Nubia</option>
            <option value="Bà Triệu – Vietnam">Bà Triệu – Vietnam</option>
            <option value="Basil II – Byzantium">Basil II – Byzantium</option>
            <option value="Catherine de Medici – France">
              Catherine de Medici – France
            </option>
            <option value="Chandragupta – India">Chandragupta – India</option>
            <option value="Cleopatra – Egypt">Cleopatra – Egypt</option>
            <option value="Cyrus – Persia">Cyrus – Persia</option>
            <option value="Dido – Phoenicia">Dido – Phoenicia</option>
            <option value="Eleanor of Aquitaine – France / England">
              Eleanor of Aquitaine – France / England
            </option>
            <option value="Elizabeth I – England">Elizabeth I – England</option>
            <option value="Frederick Barbarossa – Germany">
              Frederick Barbarossa – Germany
            </option>
            <option value="Gandhi – India">Gandhi – India</option>
            <option value="Genghis Khan – Mongolia">
              Genghis Khan – Mongolia
            </option>
            <option value="Gilgamesh – Sumeria">Gilgamesh – Sumeria</option>
            <option value="Gitarja – Indonesia">Gitarja – Indonesia</option>
            <option value="Gorgo – Greece">Gorgo – Greece</option>
            <option value="Hammurabi – Babylon">Hammurabi – Babylon</option>
            <option value="Harald Hardrada – Norway">
              Harald Hardrada – Norway
            </option>
            <option value="Hojo Tokimune – Japan">Hojo Tokimune – Japan</option>
            <option value="John Curtin – Australia">
              John Curtin – Australia
            </option>
            <option value="João III – Portugal">João III – Portugal</option>
            <option value="Julius Caesar – Rome">Julius Caesar – Rome</option>
            <option value="Jayavarman VII – Khmer">
              Jayavarman VII – Khmer
            </option>
            <option value="Kristina – Sweden">Kristina – Sweden</option>
            <option value="Kublai Khan – Mongolia / China">
              Kublai Khan – Mongolia / China
            </option>
            <option value="Kupe – Māori">Kupe – Māori</option>
            <option value="Lautaro – Mapuche">Lautaro – Mapuche</option>
            <option value="Lady Six Sky – Maya">Lady Six Sky – Maya</option>
            <option value="Mansa Musa – Mali">Mansa Musa – Mali</option>
            <option value="Matthias Corvinus – Hungary">
              Matthias Corvinus – Hungary
            </option>
            <option value="Menelik II – Ethiopia">Menelik II – Ethiopia</option>
            <option value="Montezuma – Aztec">Montezuma – Aztec</option>
            <option value="Mvemba a Nzinga – Kongo">
              Mvemba a Nzinga – Kongo
            </option>
            <option value="Napoleon Bonaparte – France">
              Napoleon Bonaparte – France
            </option>
            <option value="Nader Shah – Persia">Nader Shah – Persia</option>
            <option value="Pedro II – Brazil">Pedro II – Brazil</option>
            <option value="Pericles – Greece">Pericles – Greece</option>
            <option value="Poundmaker – Cree">Poundmaker – Cree</option>
            <option value="Qin Shi Huang – China">Qin Shi Huang – China</option>
            <option value="Ramesses II – Egypt">Ramesses II – Egypt</option>
            <option value="Robert the Bruce – Scotland">
              Robert the Bruce – Scotland
            </option>
            <option value="Saladin – Arabia">Saladin – Arabia</option>
            <option value="Sejong – Korea">Sejong – Korea</option>
            <option value="Shaka – Zulu">Shaka – Zulu</option>
            <option value="Simon Bolívar – Gran Colombia">
              Simon Bolívar – Gran Colombia
            </option>
            <option value="Suleiman – Ottoman Empire">
              Suleiman – Ottoman Empire
            </option>
            <option value="Sundiata Keita – Mali">Sundiata Keita – Mali</option>
            <option value="Suleiman the Magnificent – Ottoman Empire">
              Suleiman the Magnificent – Ottoman Empire
            </option>
            <option value="Tamar – Georgia">Tamar – Georgia</option>
            <option value="Teddy Roosevelt – United States">
              Teddy Roosevelt – United States
            </option>
            <option value="Theodora – Byzantium">Theodora – Byzantium</option>
            <option value="Trajan – Rome">Trajan – Rome</option>
            <option value="Victoria – England">Victoria – England</option>
            <option value="Wilfrid Laurier – Canada">
              Wilfrid Laurier – Canada
            </option>
            <option value="Wu Zetian – China">Wu Zetian – China</option>
          </select>
        </div>

        {/* Ruleset Select */}
        <div className="form-group">
          <label htmlFor="ruleset">Ruleset</label>
          <select
            id="ruleset"
            name="ruleset"
            value={formData.ruleset}
            onChange={handleChange}
            required
          >
            <option value="Standard Rules">Standard Rules</option>
            <option value="Expansion: Gathering Storm">
              Expansion: Gathering Storm
            </option>
            <option value="Expansion: Rise and Fall">
              Expansion: Rise and Fall
            </option>
          </select>
        </div>

        {/* Game Difficulty Select */}
        <div className="form-group">
          <label htmlFor="gameDifficulty">Game Difficulty</label>
          <select
            id="gameDifficulty"
            name="gameDifficulty"
            value={formData.gameDifficulty}
            onChange={handleChange}
            required
          >
            <option value="Settler">Settler</option>
            <option value="Chieftain">Chieftain</option>
            <option value="Warlord">Warlord</option>
            <option value="Prince">Prince</option>
            <option value="King">King</option>
            <option value="Emperor">Emperor</option>
            <option value="Immortal">Immortal</option>
            <option value="Deity">Deity</option>
          </select>
        </div>

        {/* Game Speed Select */}
        <div className="form-group">
          <label htmlFor="gameSpeed">Game Speed</label>
          <select
            id="gameSpeed"
            name="gameSpeed"
            value={formData.gameSpeed}
            onChange={handleChange}
            required
          >
            <option value="Online">Online</option>
            <option value="Quick">Quick</option>
            <option value="Standard">Standard</option>
            <option value="Epic">Epic</option>
            <option value="Marathon">Marathon</option>
          </select>
        </div>

        {/* Map Input */}
        <div className="form-group">
          <label htmlFor="map">Map</label>
          <input
            type="text"
            id="map"
            name="map"
            value={formData.map}
            onChange={handleChange}
            required
          />
        </div>

        {/* Map Size Select */}
        <div className="form-group">
          <label htmlFor="mapSize">Map Size</label>
          <select
            id="mapSize"
            name="mapSize"
            value={formData.mapSize}
            onChange={handleChange}
            required
          >
            <option value="Duel">Duel</option>
            <option value="Tiny">Tiny</option>
            <option value="Small">Small</option>
            <option value="Standard">Standard</option>
            <option value="Large">Large</option>
            <option value="Huge">Huge</option>
          </select>
        </div>

        {/* Game Modes Checkbox */}
        <div className="form-group">
          <label>Game Modes</label>
          <div>
            <input
              type="checkbox"
              name="gameModes"
              value="Apocalypse Mode"
              onChange={handleCheckboxChange}
            />{' '}
            Apocalypse Mode
            <input
              type="checkbox"
              name="gameModes"
              value="Barbarian Clans Mode"
              onChange={handleCheckboxChange}
            />{' '}
            Barbarian Clans Mode
            <input
              type="checkbox"
              name="gameModes"
              value="Dramatic Ages Mode"
              onChange={handleCheckboxChange}
            />{' '}
            Dramatic Ages Mode
            <input
              type="checkbox"
              name="gameModes"
              value="Heroes & Legends Mode"
              onChange={handleCheckboxChange}
            />{' '}
            Heroes & Legends Mode
            <input
              type="checkbox"
              name="gameModes"
              value="Monopolies and Corporations Mode"
              onChange={handleCheckboxChange}
            />{' '}
            Monopolies and Corporations Mode
            <input
              type="checkbox"
              name="gameModes"
              value="Secret Societies Mode"
              onChange={handleCheckboxChange}
            />{' '}
            Secret Societies Mode
            <input
              type="checkbox"
              name="gameModes"
              value="Tech and Civic Shuffle Mode"
              onChange={handleCheckboxChange}
            />{' '}
            Tech and Civic Shuffle Mode
            <input
              type="checkbox"
              name="gameModes"
              value="Zombie Defense Mode"
              onChange={handleCheckboxChange}
            />{' '}
            Zombie Defense Mode
          </div>
        </div>

        {/* Description Input */}
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            minLength={50}
            maxLength={1000}
          />
        </div>

        {/* File Upload for Save Game */}
        <div className="form-group">
          <label htmlFor="saveFile">Save File</label>
          <input
            type="file"
            id="saveFile"
            name="saveFile"
            accept=".Civ6Save"
            onChange={handleFileChange}
            required
          />
        </div>

        {/* Start Location Image Upload */}
        <div className="form-group">
          <label htmlFor="startLocationImage">Start Location Image</label>
          <input
            type="file"
            id="startLocationImage"
            name="startLocationImage"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>

        {/* Toggle button for additional settings */}
        <button
          type="button"
          className="additional-settings-btn"
          onClick={handleToggleSettings}
        >
          {showAdditionalSettings
            ? 'Hide Additional Settings'
            : 'Show Additional Settings'}
        </button>

        {/* Additional Settings */}
        <div
          className={`additional-settings ${
            showAdditionalSettings ? 'visible' : ''
          }`}
        >
          {/* All optional here */}

          {/* Start Position Balance */}
          <div className="form-group">
            <label htmlFor="startPositionBalance">Start Position Balance</label>
            <select
              id="startPositionBalance"
              name="startPositionBalance"
              value={formData.startPositionBalance}
              onChange={handleChange}
              required
            >
              <option value="Balanced">Balanced</option>
              <option value="Standard">Standard</option>
              <option value="Legendary">Legendary</option>
            </select>
          </div>

          {/* Resource Quantity Select */}
          <div className="form-group">
            <label htmlFor="resourceQuantity">Resource Quantity</label>
            <select
              id="resourceQuantity"
              name="resourceQuantity"
              value={formData.resourceQuantity}
              onChange={handleChange}
              required
            >
              <option value="Sparse">Sparse</option>
              <option value="Standard">Standard</option>
              <option value="Abundant">Abundant</option>
              <option value="Random">Random</option>
            </select>
          </div>

          {/* Optional Mods Input */}
          <div className="form-group">
            <label htmlFor="mods">Mods (Optional)</label>
            <input
              type="text"
              id="mods"
              name="mods"
              value={formData.mods}
              onChange={handleChange}
            />
          </div>

          {/* Number of AI Civilizations Input */}
          <div className="form-group">
            <label htmlFor="numberOfAICivilizations">
              Number of AI Civilizations
            </label>
            <input
              type="number"
              id="numberOfAICivilizations"
              name="numberOfAICivilizations"
              value={formData.numberOfAICivilizations}
              onChange={handleChange}
              min={1}
              max={62}
              required
            />
          </div>

          {/* Number of City States Input */}
          <div className="form-group">
            <label htmlFor="numberOfCityStates">Number of City States</label>
            <input
              type="number"
              id="numberOfCityStates"
              name="numberOfCityStates"
              value={formData.numberOfCityStates}
              onChange={handleChange}
              min={1}
              max={60}
              required
            />
          </div>

          {/* Start Era Select */}
          <div className="form-group">
            <label htmlFor="startEra">Start Era</label>
            <select
              id="startEra"
              name="startEra"
              value={formData.startEra}
              onChange={handleChange}
              required
            >
              <option value="Ancient Era">Ancient Era</option>
              <option value="Classical Era">Classical Era</option>
              <option value="Medieval Era">Medieval Era</option>
              <option value="Renaissance Era">Renaissance Era</option>
              <option value="Industrial Era">Industrial Era</option>
              <option value="Modern Era">Modern Era</option>
              <option value="Atomic Era">Atomic Era</option>
              <option value="Information Era">Information Era</option>
            </select>
          </div>

          {/* Victory Conditions Checkboxes */}
          <div className="form-group">
            <label>Victory Conditions</label>
            <div>
              <input
                type="checkbox"
                name="victoryConditions"
                value="Culture Victory"
                onChange={handleCheckboxChange}
                checked={formData.victoryConditions.includes('Culture Victory')}
              />{' '}
              Culture Victory
              <input
                type="checkbox"
                name="victoryConditions"
                value="Diplomatic Victory"
                onChange={handleCheckboxChange}
                checked={formData.victoryConditions.includes(
                  'Diplomatic Victory'
                )}
              />{' '}
              Diplomatic Victory
              <input
                type="checkbox"
                name="victoryConditions"
                value="Domination Victory"
                onChange={handleCheckboxChange}
                checked={formData.victoryConditions.includes(
                  'Domination Victory'
                )}
              />{' '}
              Domination Victory
              <input
                type="checkbox"
                name="victoryConditions"
                value="Religious Victory"
                onChange={handleCheckboxChange}
                checked={formData.victoryConditions.includes(
                  'Religious Victory'
                )}
              />{' '}
              Religious Victory
              <input
                type="checkbox"
                name="victoryConditions"
                value="Science Victory"
                onChange={handleCheckboxChange}
                checked={formData.victoryConditions.includes('Science Victory')}
              />{' '}
              Science Victory
              <input
                type="checkbox"
                name="victoryConditions"
                value="Score Victory"
                onChange={handleCheckboxChange}
                checked={formData.victoryConditions.includes('Score Victory')}
              />{' '}
              Score Victory
            </div>
          </div>

          {/* Disaster Intensity Input */}
          <div className="form-group">
            <label htmlFor="disasterIntensity">Disaster Intensity</label>
            <input
              type="number"
              id="disasterIntensity"
              name="disasterIntensity"
              value={formData.disasterIntensity}
              onChange={handleChange}
              min={1}
              max={4}
              required
            />
          </div>

          {/* World Age Select */}
          <div className="form-group">
            <label htmlFor="worldAge">World Age</label>
            <select
              id="worldAge"
              name="worldAge"
              value={formData.worldAge}
              onChange={handleChange}
              required
            >
              <option value="New">New</option>
              <option value="Standard">Standard</option>
              <option value="Old">Old</option>
              <option value="Random">Random</option>
            </select>
          </div>

          {/* Rainfall Select */}
          <div className="form-group">
            <label htmlFor="rainfall">Rainfall</label>
            <select
              id="rainfall"
              name="rainfall"
              value={formData.rainfall}
              onChange={handleChange}
              required
            >
              <option value="Arid">Arid</option>
              <option value="Standard">Standard</option>
              <option value="Wet">Wet</option>
              <option value="Random">Random</option>
            </select>
          </div>

          {/* Coastal Lowland Select */}
          <div className="form-group">
            <label htmlFor="coastalLowland">Coastal Lowland</label>
            <select
              id="coastalLowland"
              name="coastalLowland"
              value={formData.coastalLowland}
              onChange={handleChange}
              required
            >
              <option value="Empty">Empty</option>
              <option value="Import">Import</option>
              <option value="Map Generator">Map Generator</option>
              <option value="Matching flatland">Matching flatland</option>
            </select>
          </div>

          {/* Sea Level Select */}
          <div className="form-group">
            <label htmlFor="seaLevel">Sea Level</label>
            <select
              id="seaLevel"
              name="seaLevel"
              value={formData.seaLevel}
              onChange={handleChange}
              required
            >
              <option value="Low">Low</option>
              <option value="Standard">Standard</option>
              <option value="High">High</option>
              <option value="Random">Random</option>
            </select>
          </div>

          {/* Start Position Link Select */}
          <div className="form-group">
            <label htmlFor="startPositionLink">Start Position Link</label>
            <select
              id="startPositionLink"
              name="startPositionLink"
              value={formData.startPositionLink}
              onChange={handleChange}
              required
            >
              <option value="Random">Random</option>
              <option value="Cultural">Cultural</option>
              <option value="Distance-Relative">Distance-Relative</option>
            </select>
          </div>

          {/* Advanced Options Checkboxes */}
          <div className="form-group">
            <label>Advanced Options</label>
            <div>
              <input
                type="checkbox"
                name="advancedOptions"
                value="No Duplicate Civilizations"
                onChange={handleCheckboxChange}
                checked={formData.advancedOptions.includes(
                  'No Duplicate Civilizations'
                )}
              />{' '}
              No Duplicate Civilizations
              <input
                type="checkbox"
                name="advancedOptions"
                value="No Duplicate Leaders"
                onChange={handleCheckboxChange}
                checked={formData.advancedOptions.includes(
                  'No Duplicate Leaders'
                )}
              />{' '}
              No Duplicate Leaders
              <input
                type="checkbox"
                name="advancedOptions"
                value="Teams Share Visibility"
                onChange={handleCheckboxChange}
                checked={formData.advancedOptions.includes(
                  'Teams Share Visibility'
                )}
              />{' '}
              Teams Share Visibility
              <input
                type="checkbox"
                name="advancedOptions"
                value="No Barbarians"
                onChange={handleCheckboxChange}
                checked={formData.advancedOptions.includes('No Barbarians')}
              />{' '}
              No Barbarians
              <input
                type="checkbox"
                name="advancedOptions"
                value="No Teams"
                onChange={handleCheckboxChange}
                checked={formData.advancedOptions.includes('No Teams')}
              />{' '}
              No Teams
              <input
                type="checkbox"
                name="advancedOptions"
                value="No Tribal Villages"
                onChange={handleCheckboxChange}
                checked={formData.advancedOptions.includes(
                  'No Tribal Villages'
                )}
              />{' '}
              No Tribal Villages
            </div>
          </div>

          {/* Game Random Seed Input */}
          <div className="form-group">
            <label htmlFor="gameRandomSeed">Game Random Seed</label>
            <input
              type="number"
              id="gameRandomSeed"
              name="gameRandomSeed"
              value={formData.gameRandomSeed}
              onChange={handleChange}
              maxLength={10}
            />
          </div>

          {/* Map Random Seed Input */}
          <div className="form-group">
            <label htmlFor="mapRandomSeed">Map Random Seed</label>
            <input
              type="number"
              id="mapRandomSeed"
              name="mapRandomSeed"
              value={formData.mapRandomSeed}
              onChange={handleChange}
              maxLength={10}
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button className="btn" text="Submit" type="submit" variant="primary" />
      </form>
    </div>
  );
};

export default Upload;
