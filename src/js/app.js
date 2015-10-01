import m, { mount } from 'mithril';

import AppLayout  from './components/app-layout';
import appState   from './models/app-state';

const defaultOptions = Object.freeze({
  debug:      false,
  container:  document.body,
});

function mergeOptions(...options) {
  return Object.assign({}, defaultOptions, ...options);
}

function onMessage(msg) {
  appState.addMessage(msg);
  m.redraw();
}

function renderApp() {
  let {
    container,
    adapter,
  } = this.options;

  function appLayout() {
    return (
      <AppLayout messages={appState.messages} {...adapter} />
    );
  }

  adapter.onMessage(onMessage);

  mount(container, appLayout());

  return this;
}

class Application {
  constructor(options={}) {
    this.options = mergeOptions(options);
  }

  start(startOptions={}) {
    let { options } = this;

    options = mergeOptions(options, startOptions);

    renderApp.apply(this);

    if(options.debug)
      console.log('Application started with\n', options)

    return this;
  }

  stop() {
    let { el } = this;

    if(el)
      el.parentNode.removeChild(el);

    return this;
  }
}

export default Application;
