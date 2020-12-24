const authRouter = require('express').Router();
const { login, register } = require('../controllers/authController');
const { validate } = require('../validators');
const { rules: registrationRules } = require('../validators/auth/register');
const { rules: loginRules } = require('../validators/auth/login');

authRouter.post('/login', [loginRules, validate], login);

authRouter.post('/register', [registrationRules, validate], register);

module.exports = authRouter;