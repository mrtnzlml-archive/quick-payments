// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Text, StyleSheet, Colors } from 'mobile-quick-payments-shared';
import { createFragmentContainer, graphql } from 'mobile-quick-payments-relay';
import Translation from 'mobile-quick-payments-translations';

import PaymentPrice from './PaymentPrice';
import StatusIcon from './StatusIcon';
import RetailerName from './RetailerName';
import type { PaymentRow as PaymentRowType } from './__generated__/PaymentRow.graphql';

type Props = {|
  +data: PaymentRowType
|};

function PaymentRow({ data }: Props) {
  return (
    <View style={styleSheet.container}>
      <View style={styleSheet.containerLeft}>
        <Text style={styleSheet.retailerName}>
          <RetailerName data={data.retailer} />
        </Text>
        <View style={styleSheet.row}>
          <PaymentPrice data={data} />
          <Text style={styleSheet.cityName}>
            <Translation passThrough=" (Todo City Name)" />
          </Text>
        </View>
        <Text style={styleSheet.dateTime}>
          <Translation passThrough="2018-11-11 12:34" />
        </Text>
      </View>

      <View>
        <StatusIcon data={data} />
      </View>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.blueGrey.$200
  },
  containerLeft: {
    flexGrow: 1
  },
  row: {
    flexDirection: 'row'
  },
  retailerName: {
    fontWeight: 'bold'
  },
  dateTime: {
    color: Colors.grey.$500
  },
  cityName: {
    fontStyle: 'italic'
  }
});

export default createFragmentContainer(
  PaymentRow,
  graphql`
    fragment PaymentRow on Payment {
      ...PaymentPrice
      ...StatusIcon
      retailer {
        ...RetailerName
      }
    }
  `
);
