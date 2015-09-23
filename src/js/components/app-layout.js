import m from 'mithril';

import Log    from './log';
import Entry  from './entry';

function controller(attrs) {
  let { send } = attrs;

  return {
    sendMessage(message) {
      send('chat:message', message);
    }
  };
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
