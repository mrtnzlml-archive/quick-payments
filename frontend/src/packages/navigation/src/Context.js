// @flow

import * as React from 'react';

const UseSwitchboxFirstError = (...args) => {
  throw new Error(
    'You cannot use actions of the Switchbox before using Swichbox somewhere. ' +
      "It's beacuse Switchbox provides a context for your navigation.",
  );
};

const NavigationContext: React$Context<{|
  +activeComponent: React.Node,
  +actions: {|
    +activateComponent: (component: React$Node) => void,
  |},
|}> = React.createContext({
  activeComponent: null,
  actions: {
    activateComponent: UseSwitchboxFirstError,
  },
});

export default NavigationContext;
