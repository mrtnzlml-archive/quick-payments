// @flow

import * as Expo from 'expo';
import * as React from 'react';

// import MainScene from 'apps/cards';
// import MainScene from 'apps/dashboard/index';
import MainScene from 'apps/dashboard/index-spaces';
// import MainScene from 'apps/onboarding';
// import MainScene from 'apps/payment/amount';
// import MainScene from 'apps/payment/codeScan'; // FIXME: this crashes the application - looping?
// import MainScene from 'apps/payment/result';

type Props = {|
  +children: React.Node,
|};

type State = {|
  isLoadingComplete: boolean,
|};

class Application extends React.Component<Props, State> {
  state = {
    isLoadingComplete: false,
  };

  loadResourcesAsync = () => {
    // TODO: load assets
  };

  handleLoadingError = (error: Error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    // eslint-disable-next-line no-console
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({
      isLoadingComplete: true,
    });
  };

  render = () => {
    if (this.state.isLoadingComplete === false) {
      return (
        <Expo.AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }

    return <MainScene />;
  };
}

Expo.registerRootComponent(Application);
