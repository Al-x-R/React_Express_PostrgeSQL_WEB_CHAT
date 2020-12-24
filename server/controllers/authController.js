const { User } = require('../models');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config/app')

const generateToken = (user) => {
  delete user.password

  const token = jwt.sign(user, config.appKey, {expiresIn: config.tokenExpiresIn})
  return {...user, ...{ token }}
}

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userInstance = await User.findOne({
      where: { email },
    });

    if (userInstance && bcrypt.compareSync(password, userInstance.password)) {
      const userWithToken = generateToken(userInstance.get({raw: true}))
      return res.status(200).send( userWithToken )
    }

    return res.status(404).send({message: 'Incorrect password or email'})

  } catch (e) {
    return res.status(500).json({message: e.message})
  }
};

exports.register = async (req, res) => {
  try {
    const {body} = req
    const userInstance = await User.create(body)
    const userWithToken = generateToken(userInstance.get({raw: true}))

    return res.status(201).send( userWithToken )
  } catch (e) {
    return res.status(409).json({message: 'User with this mail already exists'})
  }
};