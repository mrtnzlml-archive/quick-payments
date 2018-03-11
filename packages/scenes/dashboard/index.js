// @flow

import * as React from 'react';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Colors,
  Layout,
  Touchable,
  Text,
  Icon,
} from 'mobile-quick-payments-shared';
import { Translation } from 'mobile-quick-payments-translations';

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

export default () => (
  <Layout title={<Translation id="Dashboard.Title" />}>
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
          description={<Translation id="Dashboard.Navigation.BecomeRetailer" />}
        />
      </View>
    </View>
  </Layout>
);

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
    borderRadius: 15,
    padding: 15,
    height: 80, // image + (2 * padding)
    width: 80, // image + (2 * padding)
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
    paddingHorizontal: 5,
    paddingVertical: 15,
  },
  secondaryButtonText: {
    fontSize: 10,
    color: Colors.grey.$700,
  },
});
