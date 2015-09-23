(function(root) {
  var socket = root.io();

  var adapter = {
    send: function(name, data) {
      socket.emit(name, data);
    },
  };

  root.EvilChat.start({
    container: document.body,
    debug: true,
    adapter: adapter,
  });
}(window));
