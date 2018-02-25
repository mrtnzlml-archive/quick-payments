// @flow

import * as React from 'react';
import RN from 'react-native';
import { Translation } from 'mobile-quick-payments-translations';

import StyleSheet from '../ui/PlatformStyleSheet';
import Colors from '../ui/Colors';
import Text from '../ui/Text';

type Props = {|
  placeholder: React.Element<typeof Translation>,

  // works across all platforms
  keyboardType: 'default' | 'numeric' | 'email-address' | 'phone-pad',
|};

type State = {|
  placeholder: {|
    paddingVertical: RN.Animated.Value,
  |},
|};

/**
 * Wrapper around native 'TextInput' component. This component doesn't use
 * native placeholder because we need more fancy behavior.
 */
export default class TextInput extends React.Component<Props, State> {
  paddingVertical = 20;

  state = {
    placeholder: {
      paddingVertical: new RN.Animated.Value(this.paddingVertical),
    },
  };

  handleChangeText = (text: string) => {
    if (text === '') {
      // placeholder in
      RN.Animated.timing(this.state.placeholder.paddingVertical, {
        toValue: this.paddingVertical,
        duration: 50,
      }).start();
    } else {
      // placeholder out
      RN.Animated.timing(this.state.placeholder.paddingVertical, {
        toValue: 2,
        duration: 50,
      }).start();
    }
  };

  render = () => {
    const color = this.state.placeholder.paddingVertical.interpolate({
      inputRange: [0, this.paddingVertical],
      outputRange: [Colors.brandPrimary, Colors.grey.$600],
    });

    const styleSheet = {
      textInput: {
        borderRadius: 2,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.grey.$500,
        paddingVertical: this.paddingVertical,
        paddingHorizontal: 15,
      },
      placeholder: {
        position: 'absolute',
        color: color,
        paddingVertical: this.state.placeholder.paddingVertical,
        paddingHorizontal: 15,
      },
    };

    const AnimatedText = RN.Animated.createAnimatedComponent(Text);
    return (
      <RN.View>
        <AnimatedText style={styleSheet.placeholder}>
          {this.props.placeholder}
        </AnimatedText>
        <RN.TextInput
          style={styleSheet.textInput}
          {...this.props}
          placeholder={null}
          onChangeText={this.handleChangeText}
        />
      </RN.View>
    );
  };
}
