const express = require('express');
require('dotenv').config();

const config = require('./config/app')

const app = express();

const port = config.appPort;

app.get('/', (req, res) => {
  return res.send('Home page');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});