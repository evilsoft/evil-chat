import m from 'mithril';

import Log    from './log';
import Entry  from './entry';

function controller(attrs) {
  let { sendMessage } = attrs;

  return { sendMessage };
}

function view(ctrl) {
  return (
    <div>
      <Log />
      <Entry {...ctrl} />
    </div>
  );
}

var AppLayout = { controller, view };

export default AppLayout;
