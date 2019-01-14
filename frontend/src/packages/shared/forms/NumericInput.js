// @flow

import * as React from 'react';
import Translation from '_translations';

import TextInput from './TextInput';

type Props = {|
  +placeholder: React.Element<typeof Translation>,
|};

export default class NumericInput extends React.Component<Props> {
  render = () => {
    return (
      <TextInput keyboardType="numeric" placeholder={this.props.placeholder} />
    );
  };
}
