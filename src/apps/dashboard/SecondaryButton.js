// @flow

import * as React from 'react';
import {View} from 'react-native';
import Colors from '_components/Colors';
import Text from '_components/typography/Text';
import Icon from '_components/Icon';
import StyleSheet from '_components/stylesheet';
import Touchable from '_components/Touchable';

type Props = {|
  +iconName: string,
  +description: string,
  +onPress: () => void,
|};

export default function SecondaryButton({
  iconName,
  description,
  onPress,
}: Props) {
  return (
    <Touchable onPress={onPress}>
      <View style={styleSheet.secondaryButton}>
        <Icon name={iconName} size={40} color={Colors.grey.$800} />
        <Text style={styleSheet.secondaryButtonText}>{description}</Text>
      </View>
    </Touchable>
  );
}

const styleSheet = StyleSheet.create({
  secondaryButton: {
    alignItems: 'center',
    padding: 5,
  },
  secondaryButtonText: {
    fontSize: 10,
    color: Colors.grey.$700,
  },
});
