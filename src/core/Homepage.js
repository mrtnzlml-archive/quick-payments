// @flow

import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Title } from 'mobile-quick-payments-shared';
import { SafeAreaView } from 'mobile-quick-payments-navigation';

import BarcodeScanner from './BarcodeScanner';

export default class Homepage extends React.Component<{||}> {
  render = () => (
    <SafeAreaView style={style.barcodeScanner}>
      <Title>Scan QR code to pay</Title>
      <BarcodeScanner />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  barcodeScanner: {
    flex: 1,
  },
});
