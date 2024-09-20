const SaveFile = require('../models/SaveFile');

exports.createSaveFile = async (req, res) => {
  try {
    const newSaveFile = new SaveFile(req.body);
    await newSaveFile.save();
    res.status(201).json(newSaveFile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getSaveFiles = async (req, res) => {
  try {
    const saveFiles = await SaveFile.find();
    res.status(200).json(saveFiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
