var server    = require('./server');
var startSync = require('./browser-sync');

var io = require('socket.io')(server);

io.on('connection', function(socket) {
  console.log('Evil in da house!');

  socket.on('disconnect', function() {
    console.log('Evil has left!');
  });
});

var port = process.env.PORT || 1337;

server.listen(port, function() {
  startSync(port);
  console.log('server started on port: ', port);
});
