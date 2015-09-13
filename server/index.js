var server        = require('./server');
var startSync     = require('./browser-sync');
var startSockets  = require('./sockets');

var port = process.env.PORT || 1337;

server.listen(port, function() {
  startSync(port);
  startSockets(server);
  console.log('server started on port: ', port);
});
