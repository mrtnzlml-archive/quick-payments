// @flow

import * as React from 'react';
import {View} from 'react-native';
import {Touchable, StyleSheet, Colors} from '_shared';

type Props = {|
  +onPress: () => void,
|};

export default function PrimaryButton(props: Props) {
  return (
    <Touchable onPress={props.onPress} accessibilityLabel="Open QR code reader">
      <View style={styleSheet.primaryButton} />
    </Touchable>
  );
}

const styleSheet = StyleSheet.create({
  primaryButton: {
    backgroundColor: '#313B72',
    borderRadius: 5,
    padding: 10,
    height: 70, // image + (2 * padding)
    width: 70, // image + (2 * padding)
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
  },
});
