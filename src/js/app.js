var defaultOptions = {
  debug:      false,
  container:  document.body
};

var mergeOptions = function(...options) {
  return Object.assign({}, defaultOptions, ...options);
};

var renderApp = function() {
  let {container} = this.options;
  return this;
};

class Application {
  constructor(options={}) {
    this.options = mergeOptions(options);
  }

  start(options={}) {
    this.options = mergeOptions(this.options, options);
    renderApp.apply(this);

    if(this.options.debug)
      console.log('Application started with\n', this.options)

    return this;
  }

  stop() {
    if(this.el)
      this.el.parentNode.removeChild(this.el);

    return this;
  }
}

export default Application;
