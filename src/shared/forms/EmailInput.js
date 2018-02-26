// @flow

import * as React from 'react';

import TextInput from './TextInput';
import { Translation } from '../../translations';

type Props = {|
  placeholder: React.Element<typeof Translation>,
|};

export default class EmailInput extends React.Component<Props> {
  render = () => {
    return (
      <TextInput
        keyboardType="email-address"
        placeholder={this.props.placeholder}
      />
    );
  };
}
