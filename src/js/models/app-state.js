import m from 'mithril';

let messages = m.prop([]);

let appState = {
  messages() {
    return messages().slice();
  },
  addMessage(msg) {
    messages().push(msg);
  },
};

export default appState;
