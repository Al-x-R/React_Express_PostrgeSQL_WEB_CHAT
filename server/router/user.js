const userRouter = require('express').Router();
const { update } = require('../controllers/userController');
const { validate } = require('../validators');
const { auth } = require('../middleware/auth');
const { rules: updateRules} = require('../validators/user/update')

userRouter.post('/update', [auth, updateRules, validate], update);

module.exports = userRouter;