const express = require('express');
require('dotenv').config();

const config = require('./config/app');

const router = require('./router');

const bodyParser = require('body-parser');

const cors = require('cors')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())

app.use(router);

const port = config.appPort;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});