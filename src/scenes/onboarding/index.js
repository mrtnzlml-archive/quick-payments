// @flow

import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Colors,
  Title,
  Text,
} from 'mobile-quick-payments-shared';
import { Translation } from 'mobile-quick-payments-translations';

/**
 * Welcome page of the onboarding should combine login and registration into
 * one simple process.
 */
export default () => (
  <SafeAreaView style={styleSheet.safeAreaView}>
    <Title>
      <Translation id="Onboarding.Title" />
    </Title>
    <Text>
      <Translation id="Onboarding.Subtitle" />
    </Text>
    <Text>
      <Translation id="Onboarding.Email" />
    </Text>
    {/*
      1) already have an account - please logging
      2) new account - start customer onboarding process (debit card)
    */}
  </SafeAreaView>
);

const styleSheet = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
