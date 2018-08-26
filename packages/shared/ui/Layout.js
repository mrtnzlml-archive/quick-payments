// @flow

import * as React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import Translation from '_translations';

import Title from './Title';
import Colors from './Colors';
import StyleSheet from './PlatformStyleSheet';

type Props = {|
  +children: React.Node,
  +title: React.Element<typeof Translation>,
|};

export default ({children, title}: Props) => (
  <SafeAreaView style={styleSheet.safeAreaView}>
    <Title style={styleSheet.title}>{title}</Title>
    {children}
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
});
