// @flow

import * as React from 'react';
import {View} from 'react-native';
import {StyleSheet, Layout} from '_shared';
import Translation from '_translations';
import {Switch} from '_navigation';
import {CodeScanScene, CardsScene} from '_scenes';
import {warning} from '_utils';

import PaymentsList from './PaymentsList';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

type State = {|
  performTransitionTo: React.Node,
|};

export default class Dashboard extends React.Component<{||}, State> {
  state = {
    performTransitionTo: null,
  };

  transitionToCards = () => {
    this.setState({
      performTransitionTo: <CardsScene />,
    });
  };

  transitionToQRScan = () => {
    this.setState({
      performTransitionTo: <CodeScanScene />,
    });
  };

  transitionToBecomeRetailer = () => {
    warning(false, 'TODO');
  };

  render = () => {
    if (this.state.performTransitionTo !== null) {
      return <Switch to={this.state.performTransitionTo} />;
    }

    return (
      <Layout title={<Translation id="Dashboard.Title" />}>
        <PaymentsList />

        <View style={styleSheet.navigation}>
          <View style={styleSheet.button}>
            <SecondaryButton
              iconName="credit-card"
              description={<Translation id="Dashboard.Navigation.MyCard" />}
              onPress={this.transitionToCards}
            />
          </View>
          <View style={styleSheet.button}>
            <PrimaryButton onPress={this.transitionToQRScan} />
          </View>
          <View style={styleSheet.button}>
            <SecondaryButton
              iconName="trending-up"
              description={<Translation id="Dashboard.Navigation.BecomeRetailer" />}
              onPress={this.transitionToBecomeRetailer}
            />
          </View>
        </View>
      </Layout>
    );
  };
}

const styleSheet = StyleSheet.create({
  navigation: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    minHeight: 80,
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
});
