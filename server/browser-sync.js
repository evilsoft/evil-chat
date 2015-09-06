var bs = require('browser-sync').create();

module.exports = function(port) {
  bs.init({
    proxy: 'localhost:' + port,
    open: false,
    files: [ 'site/**/*' ]
  });
};
