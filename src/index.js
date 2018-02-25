// @flow

import * as React from 'react';
import Expo from 'expo';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { Text } from 'mobile-quick-payments-shared';
import { getMessages } from 'mobile-quick-payments-translations';
import { IntlProvider } from 'react-intl';

const LOCALE = 'en';

const Application = () => (
  <IntlProvider
    locale={LOCALE}
    textComponent={Text}
    messages={getMessages(LOCALE)}
  >
    <Router>
      <Stack key="root">
        <Stack key="dashboard">
          <Scene
            initial={true}
            key="dashboard"
            hideNavBar={true}
            component={require('./scenes/dashboard').default}
          />
        </Stack>
        <Stack key="onboarding" initial={true}>
          <Scene
            initial={true}
            key="onboarding"
            hideNavBar={true}
            component={require('./scenes/onboarding').default}
          />
        </Stack>
        <Stack key="payment">
          <Scene
            initial={true}
            key="payment.codeScan"
            hideNavBar={true}
            component={require('./scenes/payment/codeScan').default}
          />
          <Scene
            key="payment.amount"
            hideNavBar={true}
            component={require('./scenes/payment/amount').default}
          />
          <Scene
            key="payment.confirmation"
            hideNavBar={true}
            component={require('./scenes/payment/result/Confirmation').default}
          />
          <Scene
            key="payment.rejection"
            hideNavBar={true}
            component={require('./scenes/payment/result/Rejection').default}
          />
        </Stack>
      </Stack>
    </Router>
  </IntlProvider>
);

Expo.registerRootComponent(Application);
