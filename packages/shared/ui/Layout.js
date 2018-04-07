// @flow

import * as React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import Translation from 'mobile-quick-payments-translations';

import Title from './Title';
import Text from './Text';
import Colors from './Colors';
import StyleSheet from './PlatformStyleSheet';

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
    {help && <Text style={styleSheet.help}>{help}</Text>}
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
