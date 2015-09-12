var bs = require('browser-sync').create();

module.exports = function(port) {
  bs.init({
    proxy: {
      target: 'localhost:' + port,
      ws:     true
    },
    open: false,
    files: [ 'site/**/*' ]
  });
};
