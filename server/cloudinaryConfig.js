const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'dcfw9exii',
  api_key: process.env.CLOUDINARY_API_KEY || '633576445469888',
  api_secret:
    process.env.CLOUDINARY_API_SECRET || 'GeuzWH-6-OqSQOhMLnS85_TewYU',
});

module.exports = cloudinary;
