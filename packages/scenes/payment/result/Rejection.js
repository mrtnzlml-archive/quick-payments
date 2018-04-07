// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  SplitScreen,
  Icon,
  Colors,
  StyleSheet,
} from 'mobile-quick-payments-shared';
import { createFragmentContainer, graphql } from 'mobile-quick-payments-relay';
import Translation from 'mobile-quick-payments-translations';

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
        {/* TODO: Price component */}
        {/* TODO: show the error and explanation */}
        <Translation passThrough={data.amount} />
        <Translation passThrough={data.currency} />
      </View>
    }
  />
);

const styleSheet = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default createFragmentContainer(
  Rejection,
  graphql`
    fragment Rejection on Payment {
      amount
      currency
    }
  `,
);
