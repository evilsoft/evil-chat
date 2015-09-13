(function(root) {
  var socket = root.io();

  root.EvilChat.start({
    container: document.body,
    debug: true
  });
}(window));
