// @flow

import * as React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Colors,
  Layout,
  Touchable,
  Text,
  Icon,
} from 'mobile-quick-payments-shared';
import Translation from 'mobile-quick-payments-translations';
import { QueryRenderer, graphql } from 'mobile-quick-payments-relay';
import idx from 'idx';

import PaymentRow from './PaymentRow';
import type { dashboardQueryResponse } from './__generated__/dashboardQuery.graphql';

const goToCodeScan = () => Actions['payment.codeScan']();

const PrimaryButton = () => (
  <Touchable accessibilityComponentType="button" onPress={goToCodeScan}>
    <View style={styleSheet.primaryButton}>
      <Image
        style={styleSheet.primaryButtonImage}
        source={require('./qr_code.png')}
      />
    </View>
  </Touchable>
);

const VoidCallback = () => {}; // FIXME

const SecondaryButton = ({
  iconName,
  description,
}: {
  iconName: string,
  description: React.Element<typeof Translation>,
}) => (
  <Touchable accessibilityComponentType="button" onPress={VoidCallback}>
    <View style={styleSheet.secondaryButton}>
      <Icon name={iconName} size={40} color={Colors.grey.$800} />
      <Text style={styleSheet.secondaryButtonText}>{description}</Text>
    </View>
  </Touchable>
);

export default class Dashboard extends React.Component<{||}> {
  renderQueryRendererResult = ({
    props,
  }: {|
    props: dashboardQueryResponse,
  |}) => {
    const payments = idx(props, _ => _.scenes.dashboard.payments) || [];
    return (
      <ScrollView>
        {payments.map(payment => {
          if (payment) {
            return <PaymentRow key={payment.id} data={payment} />;
          }
        })}
      </ScrollView>
    );
  };

  render = () => (
    <Layout title={<Translation id="Dashboard.Title" />}>
      <QueryRenderer
        query={graphql`
          query dashboardQuery {
            scenes {
              dashboard {
                # TODO: get client ID from props
                payments(clientId: "EA53A691-9970-46BB-BACD-80D4A120334E") {
                  id
                  ...PaymentRow
                }
              }
            }
          }
        `}
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
          <PrimaryButton />
        </View>
        <View style={styleSheet.button}>
          <SecondaryButton
            iconName="trending-up"
            description={
              <Translation id="Dashboard.Navigation.BecomeRetailer" />
            }
          />
        </View>
      </View>
    </Layout>
  );
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
  primaryButton: {
    backgroundColor: '#313B72',
    borderRadius: 5,
    padding: 10,
    height: 70, // image + (2 * padding)
    width: 70, // image + (2 * padding)
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
  },
  primaryButtonImage: {
    height: 50,
    width: 50,
  },
  secondaryButton: {
    alignItems: 'center',
    padding: 5,
  },
  secondaryButtonText: {
    fontSize: 10,
    color: Colors.grey.$700,
  },
});
