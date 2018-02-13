// @flow

import * as React from 'react';
import { Homepage, Payment } from 'mobile-quick-payments-core';
import { Router, Stack, Scene } from 'react-native-router-flux';

export default class App extends React.Component<{||}> {
  render = () => (
    <Router>
      <Stack key="root">
        <Scene key="homepage" component={Homepage} hideNavBar={true} />
        <Scene key="payment" component={Payment} title="Payment" />
      </Stack>
    </Router>
  );
}
