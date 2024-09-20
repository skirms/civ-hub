import React, { useState } from 'react';
import axios from 'axios';
import './Upload.css';
import Button from '../components/Button';

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
  });

  const [showAdditionalSettings, setShowAdditionalSettings] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3001/api/saveFiles',
        formData
      );
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className="upload-page">
      <h2>Upload a Civilization 6 Save File</h2>
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
            {/* Add all of them here */}
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
            <option value="Saladin – Arabia">Saladin – Arabia</option>
            <option value="John Curtin – Australia">
              John Curtin – Australia
            </option>
            <option value="Montezuma – Aztec">Montezuma – Aztec</option>
            {/* Add all of them */}
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
            {/* Add all of thm */}
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
          {/* All optional inside here */}

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
              {/* Add all of them */}
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
              {/* Add all of them */}
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
              {/* Add all of them */}
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
