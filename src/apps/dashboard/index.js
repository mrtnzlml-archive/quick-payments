// @flow

import * as React from 'react';
import {View} from 'react-native';
import Layout from '_components/layout';
import StyleSheet from '_components/stylesheet';
import warning from 'util/warning';

import PaymentsList from './PaymentsList';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

function _void() {
  warning(false, 'TODO');
}

export default function Dashboard() {
  return (
    <Layout title="Payments history">
      <PaymentsList />

      <View style={styleSheet.navigation}>
        <View style={styleSheet.button}>
          <SecondaryButton
            iconName="credit-card"
            description="BECOME RETAILER"
            onPress={_void}
          />
        </View>
        <View style={styleSheet.button}>
          <PrimaryButton onPress={_void} />
        </View>
        <View style={styleSheet.button}>
          <SecondaryButton
            iconName="trending-up"
            description="MY CARDS"
            onPress={_void}
          />
        </View>
      </View>
    </Layout>
  );
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
