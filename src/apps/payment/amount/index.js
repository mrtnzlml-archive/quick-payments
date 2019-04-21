// @flow

import * as React from 'react';
import Button from '_components/forms/Button';
import NumericInput from '_components/forms/NumericInput';
import Layout from '_components/layout';
import Text from '_components/typography/Text';

const VoidCallback = () => {};

export default function PaymentAmountScene() {
  return (
    <Layout title="How much?">
      <Text>***TODO***</Text>
      <NumericInput placeholder="***TODO***" />
      <Button title="***TODO***" onPress={VoidCallback} />
    </Layout>
  );
}
