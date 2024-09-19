const express = require('express');
const { getSaveFiles } = require('../controllers/SaveFileController');
const router = express.Router();

router.get('/saveFiles', getSaveFiles);

module.exports = router;
