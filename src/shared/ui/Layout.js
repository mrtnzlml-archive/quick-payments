// @flow

import * as React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { type StylePropType } from 'mobile-quick-payments-shared';

type Props = {|
  children: React.Node,
  style?: StylePropType,
|};

export default ({ children, style }: Props) => (
  <SafeAreaView style={style}>{children}</SafeAreaView>
);
