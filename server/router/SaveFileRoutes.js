const express = require('express');
const SaveFile = require('../models/SaveFile');
const {
  getSaveFiles,
  createSaveFile,
} = require('../controllers/SaveFileController');
const router = express.Router();

router.get('/saveFiles', getSaveFiles);

router.post('/saveFiles', createSaveFile);

router.get('/saveFiles/:id', async (req, res) => {
  try {
    const saveFile = await SaveFile.findById(req.params.id);
    if (!saveFile) {
      return res.status(404).json({ message: 'Save file not found' });
    }
    res.status(200).json(saveFile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
