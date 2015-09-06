var server    = require('./server');
var startSync = require('./browser-sync');

var port = process.env.PORT || 1337;

server.listen(port, function() {
  startSync(port);
  console.log('server started on port: ', port);
});
