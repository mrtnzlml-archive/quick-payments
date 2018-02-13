// @flow

import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import BarcodeScanner from './BarcodeScanner';
import Title from './shared/text/Title';

export default class Homepage extends React.Component<{||}> {
  render = () => (
    <View style={style.barcodeScanner}>
      <Title>Scan QR code to pay</Title>
      <BarcodeScanner />
    </View>
  );
}

const style = StyleSheet.create({
  barcodeScanner: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 50,
  },
});
