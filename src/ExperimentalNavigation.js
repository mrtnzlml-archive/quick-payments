/* eslint-disable */

import * as React from 'react';

const Scene = (props: {|+a: number|}) => {};

const scenes = {
  // be explicit about the routes

  ':': Scene,
  ':dashboard': Scene,
  ':payment:amount': Scene,
};

// scenes[':payment:amount']({
//   // Flow is not happy here - good
//   a: 'string',
// });

const Link = <Props>(props: {|
  +to: $Keys<typeof scenes>,
  +props: Props,
|}): React.StatelessFunctionalComponent<Props> => {
  return scenes[props.to];
};

Link({
  to: ':payment:amount',
  props: {
    a: 'WTF', // FIXME: this is invalid a Flow should not be happy!
  },
});
