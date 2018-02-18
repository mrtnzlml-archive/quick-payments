// @flow

import * as React from 'react';
import { Text } from 'react-native';
import { Layout } from 'mobile-quick-payments-shared';

/**
 * Welcome page of the onboarding should combine login and registration into
 * one simple process.
 */
export default () => (
  <Layout>
    <Text>Product name Title</Text>
    <Text>Simplest in-person payments</Text>
    <Text>What is your email address?</Text>
    {/*
      1) already have an account - please logging
      2) new account - start customer onboarding process (debit card)
    */}
  </Layout>
);
