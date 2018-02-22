// @flow

import * as React from 'react';
import RN from 'react-native';
import { Translation } from 'mobile-quick-payments-translations';

import StyleSheet from './PlatformStyleSheet';
import type { StylePropType } from '../index';

type Props = {|
  children: React.Element<typeof Translation>,
  style?: StylePropType,
|};

export default class Text extends React.Component<Props> {
  // note: this must be class (not functional component) to work properly
  // with Animated library from RN

  render = () => (
    <RN.Text style={[styleSheet.title, this.props.style]}>
      {this.props.children}
    </RN.Text>
  );
}

const styleSheet = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'normal',
  },
});
