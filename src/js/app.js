import m, {mount} from 'mithril';

import AppLayout from './components/app-layout';

let messages = ['tickles'];

const defaultOptions = Object.freeze({
  debug:      false,
  container:  document.body,
});

function mergeOptions(...options) {
  return Object.assign({}, defaultOptions, ...options);
}

function renderApp() {
  let {
    container,
    adapter,
  } = this.options;

  function appLayout() {
    return (
      <AppLayout messages={messages} {...adapter} />
    );
  }

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
