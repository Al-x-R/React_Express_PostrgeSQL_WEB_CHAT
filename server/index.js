const express = require('express');
require('dotenv').config();

const config = require('./config/app');

const router = require('./router')

const app = express();

app.use(router)

const port = config.appPort;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});