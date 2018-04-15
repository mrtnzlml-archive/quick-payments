// @flow

import * as React from 'react';
import { View, Image } from 'react-native';
import { Touchable, StyleSheet, Colors } from 'mobile-quick-payments-shared';

export default function PrimaryButton() {
  return (
    <Touchable accessibilityComponentType="button">
      <View style={styleSheet.primaryButton}>
        <Image
          style={styleSheet.primaryButtonImage}
          source={require('./qr_code.png')}
        />
      </View>
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
  primaryButtonImage: {
    height: 50,
    width: 50,
  },
});
