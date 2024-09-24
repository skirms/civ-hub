const express = require('express');
const multer = require('multer');
const cloudinary = require('../cloudinaryConfig');
const SaveFile = require('../models/SaveFile');
const path = require('path');
const {
  getSaveFiles,
  createSaveFile,
} = require('../controllers/SaveFileController');
const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    cb(null, true);
  },
});

router.get('/saveFiles', getSaveFiles);

router.post(
  '/saveFiles',
  upload.fields([
    { name: 'saveFile', maxCount: 1 },
    { name: 'startLocationImage', maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const {
        title,
        civilization,
        leader,
        ruleset,
        gameDifficulty,
        gameSpeed,
        map,
        mapSize,
        gameModes,
        description,
      } = req.body;
      const saveFile = req.files.saveFile ? req.files.saveFile[0] : null;
      const startLocationImage = req.files.startLocationImage
        ? req.files.startLocationImage[0]
        : null;

      if (!saveFile || !startLocationImage) {
        return res.status(400).json({
          message: 'Save file and start location image are required.',
        });
      }

      const baseFileName = path.parse(saveFile.originalname).name;
      const publicIdWithExtension = `save_games/${baseFileName}.Civ6Save`;

      const saveFileUploadResult = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            resource_type: 'raw',
            public_id: publicIdWithExtension,
            format: 'Civ6Save',
          },
          (error, result) => {
            if (error) {
              console.error('Error uploading save file:', error);
              return reject(error);
            }
            resolve(result);
          }
        );
        stream.end(saveFile.buffer);
      });

      const imageUploadResult = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: 'start_locations',
            resource_type: 'image',
            public_id: `start_locations/${
              path.parse(startLocationImage.originalname).name
            }`,
          },
          (error, result) => {
            if (error) {
              console.error('Error uploading image:', error);
              return reject(error);
            }
            resolve(result);
          }
        );
        stream.end(startLocationImage.buffer);
      });

      const saveFileData = {
        title,
        civilization,
        leader,
        ruleset,
        gameDifficulty,
        gameSpeed,
        map,
        mapSize,
        gameModes:
          Array.isArray(gameModes) && gameModes.length > 0 ? gameModes : [],
        description,
        saveFile: saveFileUploadResult.secure_url,
        startLocationImage: imageUploadResult.secure_url,
      };

      const newSaveFile = new SaveFile(saveFileData);
      const savedFile = await newSaveFile.save();

      res.status(201).json(savedFile);
    } catch (error) {
      console.error('Error uploading save file or image:', error);
      res.status(500).json({ error: 'Failed to upload save file or image' });
    }
  }
);

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
