// @flow

import * as React from 'react';
import {NumericInput} from '_components';
import Button from '_components/forms/Button';
import Layout from '_components/layout';
import Translation from '_translations';

const VoidCallback = () => {};

export default function PaymentAmountScene() {
  return (
    <Layout title={<Translation id="Payment.Title" />}>
      <Translation id="General.TODO" />
      <NumericInput placeholder={<Translation id="General.TODO" />} />
      <Button
        title={<Translation id="General.TODO" />}
        onPress={VoidCallback}
      />
    </Layout>
  );
}
