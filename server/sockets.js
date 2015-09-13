var socketIo = require('socket.io');

var connect = function(io) {
  io.on('connection', function(socket) {
    console.log('Evil in da house!');

    socket.on('disconnect', function() {
      console.log('Evil has left!');
    });
  });
};

module.exports = function(server) {
  connect(socketIo(server));
};
