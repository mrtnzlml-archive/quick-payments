// @flow

import * as React from 'react';
import { Text } from 'react-native'; // eslint-disable-line no-restricted-imports
import { Translation } from 'mobile-quick-payments-translations';

import StyleSheet from './PlatformStyleSheet';
import type { StylePropType } from '../index';

type Props = {|
  children: React.Element<typeof Translation>,
  style?: StylePropType,
|};

export default ({ children, style }: Props) => (
  <Text style={[styleSheet.title, style]}>{children}</Text>
);

const styleSheet = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'normal',
  },
});
