// @flow

import * as React from 'react';
import {View} from 'react-native';
import {Colors, Touchable, Money, DateTime, NullBoundary} from '_components';
import Text from '_components/typography/Text';
import StyleSheet from '_components/stylesheet';
import {createFragmentContainer, graphql} from '_relay';
import Translation from '_translations';
import warning from 'util/warning';
import type {PaymentRow_data as PaymentRowType} from '__generated__/PaymentRow_data.graphql';

import StatusIcon from './StatusIcon';

type Props = {|
  +data: PaymentRowType,
|};

function _void() {
  warning(false, 'TODO');
}

function PaymentRow({data}: Props) {
  const retailerName = data.retailer?.name;

  return (
    <Touchable style={styleSheet.container} onPress={_void}>
      <React.Fragment>
        <View style={styleSheet.containerLeft}>
          <Text style={styleSheet.retailerName}>
            <Translation passThrough={retailerName} />
          </Text>
          <View style={styleSheet.row}>
            <Money data={data.total} />
            <Text style={styleSheet.cityName}>
              <Translation
                passThrough={
                  data.location ? (
                    ` (${data.location})`
                  ) : (
                    <NullBoundary length={6} />
                  )
                }
              />
            </Text>
          </View>
          <Text style={styleSheet.dateTime}>
            <Translation passThrough={<DateTime milliseconds={data.date} />} />
          </Text>
        </View>

        <View>
          <StatusIcon data={data} />
        </View>
      </React.Fragment>
    </Touchable>
  );
}

const styleSheet = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.blueGrey.$200,
  },
  containerLeft: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
  },
  retailerName: {
    fontWeight: 'bold',
  },
  dateTime: {
    color: Colors.grey.$500,
  },
  cityName: {
    fontStyle: 'italic',
  },
});

export default createFragmentContainer(PaymentRow, {
  data: graphql`
    fragment PaymentRow_data on Payment {
      location
      date
      ...StatusIcon_data
      total {
        ...Money_data
      }
      retailer {
        name
      }
    }
  `,
});
