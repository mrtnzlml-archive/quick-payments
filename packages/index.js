// @flow

import * as React from 'react';
import Expo from 'expo';
import {Device} from 'quick-payments-shared';
import {
  getMessages,
  IntlProvider,
  type SupportedLanguagesType,
  type TranslationKeysObject,
} from 'quick-payments-translations';
import {Switchboard, RegisterSwitch} from 'quick-payments-navigation';

type State = {|
  isLoading: boolean,
  locale: SupportedLanguagesType,
  intlMessages: TranslationKeysObject,
|};

const Scenes = {
  dashboard: require('./scenes/dashboard').default,
  onboarding: require('./scenes/onboarding').default,
  payment: {
    amount: require('./scenes/payment/amount').default,
    codeScan: require('./scenes/payment/codeScan').default,
    result: require('./scenes/payment/result').default,
  },
};

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
      <IntlProvider locale={this.state.locale} messages={this.state.intlMessages}>
        <Switchboard>
          <RegisterSwitch path="/" component={<Scenes.onboarding />} />

          <RegisterSwitch
            path="/dashboard"
            component={<Scenes.dashboard clientId="EA53A691-9970-46BB-BACD-80D4A120334E" />}
          />

          <RegisterSwitch
            path="/payment/result"
            component={
              <Scenes.payment.result paymentId="73F4E736-3F49-4EA3-9241-72C5072EE060" />
              // <Scenes.payment.result paymentId="3EEF653E-E0EC-4396-BE66-35D55A9A2366" />
            }
          />
        </Switchboard>
      </IntlProvider>
    );
  };
}

Expo.registerRootComponent(Application);
