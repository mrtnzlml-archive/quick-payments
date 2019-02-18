// @flow

import * as React from 'react';
import {View} from 'react-native';
import {
  Text,
  StyleSheet,
  Colors,
  Touchable,
  Money,
  DateTime,
  NullBoundary,
} from '_shared';
import {createFragmentContainer, graphql} from '_relay';
import Translation from '_translations';
import {warning} from '_utils';

import StatusIcon from './StatusIcon';
import type {PaymentRow as PaymentRowType} from './__generated__/PaymentRow.graphql';

type Props = {|
  +data: PaymentRowType,
|};

class PaymentRow extends React.Component<Props> {
  void = () => {
    warning(false, 'TODO');
  };

  render() {
    const {data} = this.props;
    const retailerName = data.retailer?.name;

    return (
      <Touchable style={styleSheet.container} onPress={this.void}>
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
              <Translation
                passThrough={<DateTime milliseconds={data.date} />}
              />
            </Text>
          </View>

          <View>
            <StatusIcon data={data} />
          </View>
        </React.Fragment>
      </Touchable>
    );
  }
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

export default createFragmentContainer(
  PaymentRow,
  graphql`
    fragment PaymentRow on Payment {
      location
      date
      ...StatusIcon
      total {
        ...Money
      }
      retailer {
        name
      }
    }
  `,
);
