import m from 'mithril';

function controller(attrs) {
  let { sendMessage } = attrs;

  return {
    message: m.prop(''),

    send(e) {
      const { message } = this;

      e.preventDefault();

      if(message()) {
        sendMessage(message());
        message('');
      }
    },
  };
}

function view(ctrl) {
  return (
    <form className="entry" onsubmit={ctrl.send.bind(ctrl)}>
      <input
        className="entry__input"
        autocomplete="off"
        onchange={m.withAttr('value', ctrl.message)}
        value={ctrl.message()}
      />
      <button className="entry__send">Send</button>
    </form>
  );
}

const Entry = { controller, view };

export default Entry;
