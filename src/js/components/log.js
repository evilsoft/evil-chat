import m from 'mithril';

function buildMessage(msg) {
  return (
    <li className="log__message">
      {msg}
    </li>
  );
}

function controller() {
  return { messages: [] };
}

function view(ctrl) {
  let { messages } = ctrl;

  return (
    <ul className="log">
      { messages.map(buildMessage) }
    </ul>
  );
}

var Log = { controller, view };

export default Log;
