// @flow

import * as React from 'react';
import { View } from 'react-native';
import Translation from 'mobile-quick-payments-translations';

import StyleSheet from '../ui/PlatformStyleSheet';
import Colors from '../ui/Colors';
import Touchable from '../ui/Touchable';
import Text from '../ui/Text';
import Icon from '../ui/Icon';

type Props = {|
  +title: React.Element<typeof Translation>,
  +onPress: () => void,
  +omitValidation?: boolean, // FIXME: this is needed only because of internal details of FormGroup component
  +disabled?: boolean,
|};

function Button(props: Props) {
  let child = (
    <View style={styleSheet.view}>
      <Text style={styleSheet.text}>{props.title}</Text>
      <View style={styleSheet.icon}>
        <Icon name="chevron-right" color={Colors.white} />
      </View>
    </View>
  );

  if (props.disabled === true) {
    return <View style={styleSheet.disabled}>{child}</View>;
  }

  return (
    <Touchable accessibilityComponentType="button" onPress={props.onPress}>
      {child}
    </Touchable>
  );
}

Button.defaultProps = {
  disabled: false,
};

export default Button;

const styleSheet = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'center',
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
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    right: 0,
    alignSelf: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});
