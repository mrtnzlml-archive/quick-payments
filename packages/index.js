// @flow

import * as React from 'react';
import Expo from 'expo';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { Device } from 'mobile-quick-payments-shared';
import {
  getMessages,
  IntlProvider,
  type SupportedLanguagesType,
  type TranslationKeysObject,
} from 'mobile-quick-payments-translations';

type State = {|
  isLoading: boolean,
  locale: SupportedLanguagesType,
  intlMessages: TranslationKeysObject,
|};

class Application extends React.Component<{||}, State> {
  state = {
    isLoading: true,
    locale: 'en',
    intlMessages: {},
  };

  componentDidMount = async () => {
    const deviceLocale = await Device.getCurrentLocaleAsync();

    this.setState({
      isLoading: false,
      locale: deviceLocale,
      intlMessages: getMessages(deviceLocale),
    });
  };

  render = () => {
    if (this.state.isLoading === true) {
      return null; // TODO: loading indicator or maybe encapsulate it in the IntlProvider?
    }

    return (
      <IntlProvider
        locale={this.state.locale}
        messages={this.state.intlMessages}
      >
        <Router>
          <Stack key="root">
            <Stack key="dashboard" initial={true}>
              <Scene
                initial={true}
                key="dashboard"
                hideNavBar={true}
                component={require('./scenes/dashboard').default}
              />
            </Stack>
            <Stack key="onboarding">
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
                key="payment.result"
                hideNavBar={true}
                component={require('./scenes/payment/result').default}
                // custom scene props
                paymentId="73F4E736-3F49-4EA3-9241-72C5072EE060" // TODO
                // paymentId="3EEF653E-E0EC-4396-BE66-35D55A9A2366" // failed
              />
            </Stack>
          </Stack>
        </Router>
      </IntlProvider>
    );
  };
}

Expo.registerRootComponent(Application);
