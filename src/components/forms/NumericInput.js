// @flow

import * as React from 'react';

import TextInput from './TextInput';

type Props = {|
  +placeholder: string,
|};

export default class NumericInput extends React.Component<Props> {
  render = () => {
    return (
      <TextInput keyboardType="numeric" placeholder={this.props.placeholder} />
    );
  };
}
