// @flow

import * as React from 'react';
import { Title, SafeAreaView } from 'mobile-quick-payments-shared';

export default class Payment extends React.Component<{||}> {
  render = () => (
    <SafeAreaView>
      <Title>How much?</Title>
    </SafeAreaView>
  );
}
