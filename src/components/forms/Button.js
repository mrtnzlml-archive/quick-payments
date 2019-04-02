// @flow

import * as React from 'react';
import {View} from 'react-native';

import StyleSheet from '../stylesheet';
import Colors from '../Colors';
import Touchable from '../Touchable';
import Text from '../typography/Text';
import Icon from '../Icon';

type Props = {|
  +title: string,
  +onPress: () => void,
  // FIXME: this is needed only because of internal details of FormGroup component (vv)
  +omitValidation?: boolean,
  +disabled?: boolean,
|};

function Button(props: Props) {
  const child = (
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

  return <Touchable onPress={props.onPress}>{child}</Touchable>;
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
    paddingHorizontal: 10,
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
