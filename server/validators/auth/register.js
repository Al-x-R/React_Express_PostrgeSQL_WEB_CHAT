const { body } = require('express-validator');

exports.rules = (() => {
  return [
    body('firstName').notEmpty(),
    body('lastName').notEmpty(),
    body('gender').notEmpty(),
    body('email').isEmail().notEmpty(),
    body('password').isLength({ min: 8 }).notEmpty(),
  ];
})();