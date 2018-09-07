// @flow

import * as React from 'react';
import {View, ScrollView} from 'react-native';
import {StyleSheet, Layout} from '_shared';
import Translation from '_translations';
import {QueryRenderer, graphql} from '_relay';
import {Switch} from '_navigation';
import idx from 'idx';
import {CodeScanScene, CardsScene} from '_scenes';
import {warning} from '_fbjs';

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
  performTransitionTo: React.Node,
|};

type QueryRendererResponse = {
  props: ?dashboardQueryResponse,
};

export default class Dashboard extends React.Component<Props, State> {
  state = {
    performTransitionTo: null,
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

  transitionToCards = () => {
    this.setState({
      performTransitionTo: <CardsScene />,
    });
  };

  transitionToQRScan = () => {
    this.setState({
      performTransitionTo: <CodeScanScene />,
    });
  };

  transitionToBecomeRetailer = () => {
    warning(false, 'TODO');
  };

  render = () => {
    if (this.state.performTransitionTo !== null) {
      return <Switch to={this.state.performTransitionTo} />;
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
              onPress={this.transitionToCards}
            />
          </View>
          <View style={styleSheet.button}>
            <PrimaryButton onPress={this.transitionToQRScan} />
          </View>
          <View style={styleSheet.button}>
            <SecondaryButton
              iconName="trending-up"
              description={<Translation id="Dashboard.Navigation.BecomeRetailer" />}
              onPress={this.transitionToBecomeRetailer}
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
    minHeight: 80,
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
});
