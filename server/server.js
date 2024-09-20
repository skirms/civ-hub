const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const saveFileRoutes = require('./router/SaveFileRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/civhub';
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

app.use('/api', saveFileRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
