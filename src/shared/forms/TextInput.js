// @flow

import * as React from 'react';
import ReactNative from 'react-native';
import {
  type TranslationKeys,
  type IntlShape,
  InjectIntl,
} from 'mobile-quick-payments-translations';

import StyleSheet from '../ui/PlatformStyleSheet';
import Colors from '../ui/Colors';

type Props = {|
  placeholder: TranslationKeys, // FIXME: is it OK like this - would be great to use 'React.Element<typeof Translation>' here as well

  // works across all platforms
  keyboardType: 'default' | 'numeric' | 'email-address' | 'phone-pad',

  intl: IntlShape,
|};

class TextInput extends React.Component<Props> {
  render = () => (
    <ReactNative.TextInput
      style={styleSheet.textInput}
      {...this.props}
      placeholder={this.props.intl.formatMessage({
        id: this.props.placeholder,
      })}
    />
  );
}

export default InjectIntl(TextInput);

const styleSheet = StyleSheet.create({
  textInput: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey.$500,
    padding: 10,
  },
});
