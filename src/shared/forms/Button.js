// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Translation } from 'mobile-quick-payments-translations';

import StyleSheet from '../ui/PlatformStyleSheet';
import Colors from '../ui/Colors';
import Touchable from '../ui/Touchable';
import Text from '../ui/Text';

type Props = {|
  title: React.Element<typeof Translation>,
  onPress: () => void,
|};

export default (props: Props) => {
  return (
    <Touchable accessibilityComponentType="button" onPress={props.onPress}>
      <View style={styleSheet.view}>
        <Text style={styleSheet.text}>{props.title}</Text>
      </View>
    </Touchable>
  );
};

const styleSheet = StyleSheet.create({
  view: {
    backgroundColor: Colors.brandPrimary,
    borderRadius: 2,
    android: {
      android: {
        elevation: 4,
      },
    },
  },
  text: {
    color: Colors.white,
    textAlign: 'center',
    padding: 8,
  },
});
