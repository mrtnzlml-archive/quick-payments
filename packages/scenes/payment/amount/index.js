// @flow

import * as React from 'react';
import {
  Text,
  Layout,
  NumericInput,
  Button,
} from 'mobile-quick-payments-shared';
import Translation from 'mobile-quick-payments-translations';

const VoidCallback = () => {};

export default () => (
  <Layout title={<Translation id="Payment.Title" />}>
    <Text>
      <Translation id="General.TODO" />
    </Text>

    <NumericInput placeholder={<Translation id="General.TODO" />} />
    <Button title={<Translation id="General.TODO" />} onPress={VoidCallback} />
  </Layout>
);
