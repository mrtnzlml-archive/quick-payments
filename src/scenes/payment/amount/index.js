// @flow

import * as React from 'react';
import { Text, Layout, TextInput, Button } from 'mobile-quick-payments-shared';
import { Translation } from 'mobile-quick-payments-translations';

const VoidCallback = () => {};

export default () => (
  <Layout title={<Translation id="Payment.Title" />}>
    <Text>
      <Translation id="General.TODO" />
    </Text>

    <TextInput placeholder="General.TODO" keyboardType="numeric" />
    <Button title={<Translation id="General.TODO" />} onPress={VoidCallback} />
  </Layout>
);
