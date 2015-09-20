import m from 'mithril';

function controller() {
  return {
    message: m.prop(''),
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
      <button type="button" className="entry__send">
        Send
      </button>
    </div>
  );
}

const Entry = { controller, view };

export default Entry;
