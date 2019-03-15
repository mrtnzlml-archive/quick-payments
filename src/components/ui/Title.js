// @flow

import * as React from 'react';
import Translation from '_translations';

import Text from './Text';
import Colors from './Colors';
import StyleSheet from '../stylesheet';
import type {StylePropType} from '../index';

type Props = {|
  +children: React.Element<typeof Translation>,
  +style?: StylePropType,
|};

export default function Title({children, style}: Props) {
  return <Text style={[styleSheet.title, style]}>{children}</Text>;
}

const styleSheet = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.text,
  },
});
