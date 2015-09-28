import m from 'mithril';

import Log    from './log';
import Entry  from './entry';

function controller(attrs) {
  let {
    sendMessage,
    messages,
  } = attrs;

  return {
    sendMessage,
    messages,
  };
}

function view(ctrl) {
  return (
    <div>
      <Log {...ctrl} />
      <Entry {...ctrl} />
    </div>
  );
}

var AppLayout = { controller, view };

export default AppLayout;
