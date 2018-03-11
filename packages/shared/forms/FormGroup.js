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
  const isLast = index => index === props.children.length - 1;

  return props.children.map((child, index) => (
    <View key={index} style={isLast(index) ? undefined : styleSheet.row}>
      {/*
        TODO: add something like "onValidation" callback to the child and
              allow form submit only if the form is completely valid, note
              that empty textinput should not be valid (?)
      */}
      {child}
    </View>
  ));
}

const styleSheet = StyleSheet.create({
  row: {
    marginBottom: 10,
  },
});
