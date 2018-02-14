// @flow

import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

import Colors from './Colors';

type Props = {|
  children: React.Node,
|};

export default ({ children }: Props) => (
  <Text style={style.title}>{children}</Text>
);

const style = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.brandPrimary,
  },
});
