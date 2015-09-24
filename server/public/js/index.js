(function(root) {
  var socket  = root.io();
  var emit    = socket.emit;

  var adapter = {
    sendMessage: emit.bind(socket, 'chat:message')
  };

  root.EvilChat.start({
    container: document.body,
    debug: true,
    adapter: adapter,
  });
}(window));
