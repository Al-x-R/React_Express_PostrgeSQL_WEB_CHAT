const authRouter = require('express').Router();

authRouter.post('/login', (req, res) => {
  const { body } = req;
  return res.status(200).send(['Login page', body]);
});

authRouter.post('/register', (req, res) => {
  return res.send('Sign Up Page');
});

module.exports = authRouter;