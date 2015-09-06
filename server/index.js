var express = require('express');
var app     = express();
var server  = require('http').Server(app);

var bs = require('browser-sync').create();

app.use(express.static('site'));

server.listen(1337, function() {
  bs.init({
    proxy: 'localhost:' + 1337,
    open: false,
    files: [ 'site/**/*' ]
  });
  console.log('server started on port: ', 1337);
});
