// @flow

import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Title, Layout } from 'mobile-quick-payments-shared';

import BarcodeScanner from './BarcodeScanner';

export default () => (
  <Layout style={style.barcodeScanner}>
    <Title>Scan QR code to pay</Title>
    <BarcodeScanner />
  </Layout>
);

const style = StyleSheet.create({
  barcodeScanner: {
    flex: 1,
  },
});
