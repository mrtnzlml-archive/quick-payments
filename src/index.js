// @flow

import * as React from 'react';
import { Text } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Homepage from 'mobile-quick-payments-homepage';
import Payment from 'mobile-quick-payments-payment';
import { getMessages } from 'mobile-quick-payments-translations';
import { IntlProvider } from 'react-intl';

const LOCALE = 'en';

export default () => (
  <IntlProvider
    locale={LOCALE}
    textComponent={Text}
    messages={getMessages(LOCALE)}
  >
    <Router>
      <Stack key="root">
        <Scene key="homepage" component={Homepage} hideNavBar={true} />
        <Scene key="payment" component={Payment} hideNavBar={true} />
      </Stack>
    </Router>
  </IntlProvider>
);
