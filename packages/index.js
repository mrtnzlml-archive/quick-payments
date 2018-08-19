// @flow

import * as React from 'react';
import Expo from 'expo';
import {Device} from '_shared';
import {
  getMessages,
  IntlProvider,
  type SupportedLanguagesType,
  type TranslationKeysObject,
} from '_translations';
import {Switchboard} from '_navigation';
import {DashboardScene} from '_scenes';

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
      <IntlProvider locale={this.state.locale} messages={this.state.intlMessages}>
        <Switchboard initialScene={<DashboardScene />} />
      </IntlProvider>
    );
  };
}

Expo.registerRootComponent(Application);
