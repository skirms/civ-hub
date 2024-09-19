import React, { useState } from 'react';
import './Upload.css';
import Button from '../components/Button';

const Upload = () => {
  const [formData, setFormData] = useState({
    title: '',
    civ: '',
    difficulty: '',
    map: '',
    size: '',
    speed: '',
    mods: '',
    saveFile: null,
    imageFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="upload-page">
      <h2>Upload a Civilization 6 Save File</h2>
      <form className="upload-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Save File Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="civ">Civilization</label>
          <input
            type="text"
            id="civ"
            name="civ"
            value={formData.civ}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="difficulty">Difficulty</label>
          <input
            type="text"
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            required
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="size">Map Size</label>
          <input
            type="text"
            id="size"
            name="size"
            value={formData.size}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="speed">Game Speed</label>
          <input
            type="text"
            id="speed"
            name="speed"
            value={formData.speed}
            onChange={handleChange}
            required
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="imageFile">Upload Thumbnail Image</label>
          <input
            type="file"
            id="imageFile"
            name="imageFile"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>

        <Button className="btn" text="Submit" type="submit" variant="primary" />
      </form>
    </div>
  );
};

export default Upload;
