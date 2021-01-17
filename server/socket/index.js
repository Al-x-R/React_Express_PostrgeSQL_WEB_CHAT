const socketIo = require('socket.io');
const { sequelize } = require('../models');
const Message = require('../models').Message;

const SocketServer = (server) => {
  const io = socketIo(server);

  io.on('connection', (socket) => {

    socket.on('join', async (user) => {
      console.log('New user joined', user.firstName);
    });
  });

};

module.exports = SocketServer;