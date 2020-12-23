const { User } = require('../models');
const bcrypt = require('bcrypt')

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userInstance = await User.findOne({
      where: { email },
    });

    if (userInstance && bcrypt.compareSync(password, userInstance.password)) {
      return res.status(200).send( userInstance )
    }

    return res.status(404).send({message: 'Incorrect password or email'})

  } catch (e) {

  }
  // return res.send([email, password]);
};

exports.register = async (req, res) => {

};