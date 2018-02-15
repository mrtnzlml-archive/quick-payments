// @flow

import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Title, Layout } from 'mobile-quick-payments-shared';
import { Translation } from 'mobile-quick-payments-translations';

import BarcodeScanner from './BarcodeScanner';

export default () => (
  <Layout style={style.barcodeScanner}>
    <Title>
      <Translation id="Homepage.Title" />
    </Title>
    <BarcodeScanner />
  </Layout>
);

const style = StyleSheet.create({
  barcodeScanner: {
    flex: 1,
  },
});
