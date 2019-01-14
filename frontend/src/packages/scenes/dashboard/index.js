// @flow

import * as React from 'react';
import {View} from 'react-native';
import {StyleSheet, Layout} from '_shared';
import Translation from '_translations';
import {warning} from '_utils';

import PaymentsList from './PaymentsList';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

type Props = {||};

export default class Dashboard extends React.Component<Props> {
  void = () => {
    warning(false, 'TODO');
  };

  render = () => {
    return (
      <Layout title={<Translation id="Dashboard.Title" />}>
        <PaymentsList />

        <View style={styleSheet.navigation}>
          <View style={styleSheet.button}>
            <SecondaryButton
              iconName="credit-card"
              description={<Translation id="Dashboard.Navigation.MyCard" />}
              onPress={this.void}
            />
          </View>
          <View style={styleSheet.button}>
            <PrimaryButton onPress={this.void} />
          </View>
          <View style={styleSheet.button}>
            <SecondaryButton
              iconName="trending-up"
              description={
                <Translation id="Dashboard.Navigation.BecomeRetailer" />
              }
              onPress={this.void}
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
