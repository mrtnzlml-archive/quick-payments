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
                key="payment.confirmation"
                hideNavBar={true}
                component={
                  require('./scenes/payment/result/Confirmation').default
                }
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
  };
}

Expo.registerRootComponent(Application);
