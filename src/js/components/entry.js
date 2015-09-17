import m from 'mithril';

var Entry = {
  view() {
    return (
      <div className="entry">
        <input
          className="entry__input"
          autocomplete="off"
        />
        <button type="button" className="entry__send">
          Send
        </button>
      </div>
    );
  }
};

export default Entry;
