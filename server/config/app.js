require('dotenv').config();

module.exports = {
  appKey: process.env.APP_KEY,
  tokenExpiresIn: process.env.TOKEN_EXPIRES_IN,
  appUrl: process.env.APP_URL,
  appPort: process.env.APP_PORT,
};