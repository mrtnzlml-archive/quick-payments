// @flow

import * as React from 'react';
import {View} from 'react-native';
import {Text, StyleSheet, Colors, Touchable, Money} from '_shared';
import {createFragmentContainer, graphql} from '_relay';
import Translation from '_translations';
import {Switch} from '_navigation';
import {PaymentResultScreen} from '_scenes';
import idx from 'idx';

import StatusIcon from './StatusIcon';
import type {PaymentRow as PaymentRowType} from './__generated__/PaymentRow.graphql';

type Props = {|
  +data: PaymentRowType,
|};

type State = {
  performTransition: boolean,
};

class PaymentRow extends React.Component<Props, State> {
  state = {
    performTransition: false,
  };

  transitionToPaymentResult = () => {
    this.setState({
      performTransition: true,
    });
  };

  render() {
    const {data} = this.props;

    if (this.state.performTransition === true) {
      return <Switch to={<PaymentResultScreen paymentId={data.id} />} />;
    }

    const retailerName = idx(data, _ => _.retailer.name);

    return (
      <Touchable style={styleSheet.container} onPress={this.transitionToPaymentResult}>
        <React.Fragment>
          <View style={styleSheet.containerLeft}>
            <Text style={styleSheet.retailerName}>
              <Translation passThrough={retailerName} />
            </Text>
            <View style={styleSheet.row}>
              <Money data={data.total} />
              <Text style={styleSheet.cityName}>
                <Translation passThrough={` (${data.location || ''})`} />
              </Text>
            </View>
            <Text style={styleSheet.dateTime}>
              {/* TODO: Date, Time and DateTime components similar to Money */}
              <Translation passThrough={data.date} />
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
      id
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
