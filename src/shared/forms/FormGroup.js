// @flow

import * as React from 'react';
import { View } from 'react-native';

import StyleSheet from '../ui/PlatformStyleSheet';

type Props = {|
  children: $ReadOnlyArray<React.Node>,
|};

/**
 * `FormGroup` silently expects that all form elements are in a column.
 */
export default function FormGroup(props: Props) {
  const lastIndex = props.children.length - 1;
  return props.children.map((child, index) => (
    <View
      key={index}
      style={index === lastIndex ? styleSheet.lastRow : styleSheet.row}
    >
      {child}
    </View>
  ));
}

const styleSheet = StyleSheet.create({
  row: {
    marginBottom: 10,
  },
  lastRow: {
    // nothing at this moment
  },
});
