var express = require('express');
var app     = express();
var server  = require('http').Server(app);

app.use(express.static('site'));
app.use(express.static('server/public'));

module.exports = server;
