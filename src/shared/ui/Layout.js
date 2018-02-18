// @flow

import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { Title, Colors } from 'mobile-quick-payments-shared';
import { Translation } from 'mobile-quick-payments-translations';

type Props = {|
  children: React.Node,
  title: React.Element<typeof Translation>,
  help?: React.Element<typeof Translation>,
|};

export default ({ children, title, help }: Props) => (
  <SafeAreaView style={styleSheet.safeAreaView}>
    {/* TODO: optional left button (cancel payment) */}
    <Title style={styleSheet.title}>{title}</Title>
    {children}
    <Text style={styleSheet.help}>{help}</Text>
  </SafeAreaView>
);

const styleSheet = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.background,
  },
  title: {
    marginVertical: 10,
  },
  help: {
    marginVertical: 10,
    color: Colors.grey.$500,
  },
});
