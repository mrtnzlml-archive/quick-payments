// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  SplitScreen,
  Icon,
  Colors,
  StyleSheet,
  Price
} from 'mobile-quick-payments-shared';
import { createFragmentContainer, graphql } from 'mobile-quick-payments-relay';

/**
 * TODO: this page must be animated to avoid scam with static screenshots
 * TODO: show date and time
 * TODO: it should be grey on return from homepage (?) - to prevent scams with just opening older
 */
const Confirmation = ({ data }) => (
  <SplitScreen
    childrenTop={
      <View style={styleSheet.container}>
        <Icon name="check" color={Colors.white} size={300} />
      </View>
    }
    childrenBottom={
      <View>
        <Price amount={data.amount} currency={data.currency} />
      </View>
    }
  />
);

const styleSheet = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default createFragmentContainer(
  Confirmation,
  graphql`
    fragment Confirmation on Payment {
      amount
      currency
    }
  `
);
