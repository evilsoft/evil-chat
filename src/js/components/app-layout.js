import m from 'mithril';

import Log    from './log';
import Entry  from './entry';

var AppLayout = {
  view() {
    return (
      <div>
        <Log />
        <Entry />
      </div>
    );
  }
};

export default AppLayout;
