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

const Rejection = ({ data }) => (
  <SplitScreen
    backgroundColor={Colors.error}
    childrenTop={
      <View style={styleSheet.container}>
        <Icon name="clear" color={Colors.white} size={300} />
      </View>
    }
    childrenBottom={
      <View>
        {/* TODO: show the error and explanation */}
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
  Rejection,
  graphql`
    fragment Rejection on Payment {
      amount
      currency
    }
  `
);
