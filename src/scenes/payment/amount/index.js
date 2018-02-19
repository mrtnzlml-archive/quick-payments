// @flow

import * as React from 'react';
import { Text, Layout } from 'mobile-quick-payments-shared';
import { Translation } from 'mobile-quick-payments-translations';

export default () => (
  <Layout title={<Translation id="Payment.Title" />}>
    <Text>
      <Translation id="General.TODO" />
    </Text>
  </Layout>
);
