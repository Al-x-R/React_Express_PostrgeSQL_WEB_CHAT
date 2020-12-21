const express = require('express');
require('dotenv').config();

const app = express();

const port = process.env.APP_PORT;

app.get('/', (req, res) => {
  return res.send('Home page');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});