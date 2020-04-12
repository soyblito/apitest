const SocketIO = require('socket.io');

const socket = {};

function connect(server){
  socket.io = SocketIO(server);
}

module.exports = {
  connect,
  socket,
}