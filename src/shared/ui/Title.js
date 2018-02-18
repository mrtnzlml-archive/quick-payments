// @flow

import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { type StylePropType } from 'mobile-quick-payments-shared';

import Colors from './Colors';

type Props = {|
  children: React.Node,
  style?: StylePropType,
|};

export default ({ children, style }: Props) => (
  <Text style={[styleSheet.title, style]}>{children}</Text>
);

const styleSheet = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.brandPrimary,
  },
});
