const authRouter = require('express').Router();

authRouter.post('/login', (req, res) => {
  return res.send('Login page');
});

authRouter.post('/register', (req, res) => {
  return res.send('Sign Up Page')
})

module.exports = authRouter;