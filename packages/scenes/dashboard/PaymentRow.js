// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Text, StyleSheet, Colors } from 'mobile-quick-payments-shared';
import { createFragmentContainer, graphql } from 'mobile-quick-payments-relay';
import { Translation } from 'mobile-quick-payments-translations';

import type { PaymentRow as PaymentRowType } from './__generated__/PaymentRow.graphql';

type Props = {|
  data: PaymentRowType,
|};

function PaymentRow(props: Props) {
  return (
    <View style={styleSheet.container}>
      <Text style={styleSheet.retailerName}>
        <Translation passThrough={JSON.stringify(props.data)} />
      </Text>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.blueGrey.$200,
  },
  retailerName: {
    fontWeight: 'bold',
  },
});

export default createFragmentContainer(
  PaymentRow,
  graphql`
    fragment PaymentRow on Payment {
      status
      amount
      currency
    }
  `,
);
