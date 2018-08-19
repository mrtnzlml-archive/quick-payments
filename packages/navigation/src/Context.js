// @flow

import * as React from 'react';

const UseSwitchboxFirstError = (...args) => {
  throw new Error(
    'You cannot use actions of the Switchbox before using Swichbox somewhere. ' +
      "It's beacuse Switchbox provides a context for your navigation.",
  );
};

export default React.createContext({
  routes: [],
  actions: {
    registerRoute: UseSwitchboxFirstError,
    activateRoute: UseSwitchboxFirstError,
    isRouteActive: UseSwitchboxFirstError,
  },
});
