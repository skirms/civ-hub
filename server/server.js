const express = require('express');
const cors = require('cors');
const saveFileRoutes = require('./router/SaveFileRoutes');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api', saveFileRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
