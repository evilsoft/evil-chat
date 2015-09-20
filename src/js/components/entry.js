import m from 'mithril';

function controller() {
  return {
    message: m.prop(''),

    send() {
      const { message } = this;

      if(message()) {
        // TODO: replace with emitter
        console.log(message());
        message('');
      }
    },
  };
}

function view(ctrl) {
  return (
    <div className="entry">
      <input
        className="entry__input"
        autocomplete="off"
        onchange={m.withAttr('value', ctrl.message)}
        value={ctrl.message()}
      />
      <button type="button" className="entry__send" onclick={() => ctrl.send()}>
        Send
      </button>
    </div>
  );
}

const Entry = { controller, view };

export default Entry;
