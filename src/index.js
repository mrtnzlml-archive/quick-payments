// @flow

import * as React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Homepage from 'mobile-quick-payments-homepage';
import Payment from 'mobile-quick-payments-payment';

export default () => (
  <Router>
    <Stack key="root">
      <Scene key="homepage" component={Homepage} hideNavBar={true} />
      <Scene key="payment" component={Payment} hideNavBar={true} />
    </Stack>
  </Router>
);
