// @flow

import * as Expo from 'expo';
import * as React from 'react';
import Device from '_components/Device';
import {
  getMessages,
  IntlProvider,
  type SupportedLanguagesType,
  type TranslationKeysObject,
} from '_translations';

// import MainScene from 'apps/cards';
import MainScene from 'apps/dashboard';
// import MainScene from 'apps/onboarding';
// import MainScene from 'apps/payment/amount';
// import MainScene from 'apps/payment/codeScan'; // FIXME: this crashes the application - looping?
// import MainScene from 'apps/payment/result';

type Props = {|
  +children: React.Node,
|};

type State = {|
  isLoading: boolean,
  locale: SupportedLanguagesType,
  intlMessages: TranslationKeysObject,
|};

class Application extends React.Component<Props, State> {
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
        <MainScene />
      </IntlProvider>
    );
  };
}

Expo.registerRootComponent(Application);
