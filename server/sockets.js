var socketIo = require('socket.io');

var connect = function(io) {
  io.on('connection', function(socket) {
    socket.on('chat:message', function(message) {
      console.log('message:', message);
      io.emit('chat:message', message);
    });
  });
};

module.exports = function(server) {
  connect(socketIo(server));
};
