// @flow

import * as React from 'react';
import * as Animatable from 'react-native-animatable';
import RN from 'react-native';
import Translation from 'quick-payments-translations';

import Colors from '../ui/Colors';
import Text from '../ui/Text';
import StyleSheet from '../ui/PlatformStyleSheet';

type Props = {|
  // placeholder (help text) of the field will automatically slide to the
  // top of the field therefore it's always visible
  +placeholder: React.Element<typeof Translation>,

  // these types work across all platforms
  +keyboardType: 'default' | 'numeric' | 'email-address' | 'phone-pad',

  // callback called on text change
  +onChangeText?: (text: string) => void,

  // error message to be displayed below the field
  +errorMessage?: React.Element<typeof Translation>
|};

type State = {|
  transition: {|
    fontSize: number,
    paddingTop: number,
    color: string
  |}
|};

/**
 * Wrapper around native 'TextInput' component. This component doesn't use
 * native placeholder because we need more fancy behavior.
 *
 * Do not use this component directly outside of shared package. Use more
 * specific inputs like `EmailInput` or `NumericInput`.
 */
export default class TextInput extends React.Component<Props, State> {
  state = {
    transition: {
      fontSize: 20,
      paddingTop: 20,
      color: Colors.grey.$500
    }
  };

  handleChangeText = (text: string) => {
    if (this.props.onChangeText) {
      this.props.onChangeText(text);
    }

    if (text === '') {
      // placeholder in
      this.setState({
        transition: {
          fontSize: 20,
          paddingTop: 20,
          color: Colors.grey.$500
        }
      });
    } else {
      // placeholder out
      this.setState({
        transition: {
          fontSize: 15,
          paddingTop: 0,
          color: Colors.brandPrimary
        }
      });
    }
  };

  render = () => {
    const styleSheet = StyleSheet.create({
      textInput: {
        borderBottomWidth: 1,
        borderColor: this.props.errorMessage ? Colors.error : Colors.grey.$500,
        paddingTop: 20, // we need more space to fit in the placeholder
        paddingBottom: 10,
        fontSize: 20
      },
      placeholder: {
        position: 'absolute',
        paddingTop: this.state.transition.paddingTop,
        color: this.state.transition.color,
        fontSize: this.state.transition.fontSize
      },
      errorMessage: {
        color: Colors.error,
        fontSize: 10,
        fontWeight: 'bold'
      }
    });

    return (
      <RN.View>
        <Animatable.Text
          duration={100}
          transition={['color', 'fontSize', 'paddingTop']}
          style={styleSheet.placeholder}
        >
          {this.props.placeholder}
        </Animatable.Text>
        <RN.TextInput
          {...this.props}
          style={styleSheet.textInput}
          placeholder={null}
          onChangeText={this.handleChangeText}
        />
        <Text style={styleSheet.errorMessage}>
          {/* $FlowExpectedError: the white space below prevents line jumping */}
          {this.props.errorMessage || ' '}
        </Text>
      </RN.View>
    );
  };
}
