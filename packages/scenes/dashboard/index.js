// @flow

import * as React from 'react';
import {View, ScrollView} from 'react-native';
import {StyleSheet, Layout} from '_shared';
import Translation from '_translations';
import {QueryRenderer, graphql} from '_relay';
import {Switch} from '_navigation';
import idx from 'idx';
import {CodeScanScene} from '_scenes';

import PaymentRow from './PaymentRow';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import type {dashboardQueryResponse} from './__generated__/dashboardQuery.graphql';

const Query = graphql`
  query dashboardQuery($clientId: ID!) {
    scenes {
      dashboard {
        payments(clientId: $clientId) {
          id
          ...PaymentRow
        }
      }
    }
  }
`;

type Props = {||};

type State = {|
  performTransition: boolean,
|};

type QueryRendererResponse = {|
  +props: dashboardQueryResponse,
|};

export default class Dashboard extends React.Component<Props, State> {
  state = {
    performTransition: false,
  };

  renderQueryRendererResult = ({props}: QueryRendererResponse) => {
    const payments = idx(props, _ => _.scenes.dashboard.payments) || [];
    return (
      <ScrollView>
        {payments.map(payment => {
          if (payment) {
            return <PaymentRow key={payment.id} data={payment} />;
          }
          return undefined;
        })}
      </ScrollView>
    );
  };

  transitionToQRScan = () => {
    this.setState({
      performTransition: true,
    });
  };

  render = () => {
    if (this.state.performTransition === true) {
      return <Switch to={<CodeScanScene />} />;
    }

    return (
      <Layout title={<Translation id="Dashboard.Title" />}>
        <QueryRenderer
          query={Query}
          variables={{
            // TODO: this should be stored in the device after onboarding
            clientId: 'EA53A691-9970-46BB-BACD-80D4A120334E',
          }}
          render={this.renderQueryRendererResult}
        />

        <View style={styleSheet.navigation}>
          <View style={styleSheet.button}>
            <SecondaryButton
              iconName="credit-card"
              description={<Translation id="Dashboard.Navigation.MyCard" />}
            />
          </View>
          <View style={styleSheet.button}>
            <PrimaryButton onPress={this.transitionToQRScan} />
          </View>
          <View style={styleSheet.button}>
            <SecondaryButton
              iconName="trending-up"
              description={<Translation id="Dashboard.Navigation.BecomeRetailer" />}
            />
          </View>
        </View>
      </Layout>
    );
  };
}

const styleSheet = StyleSheet.create({
  navigation: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
});
