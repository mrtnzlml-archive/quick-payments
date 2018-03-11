// @flow

import * as React from 'react';

import TextInput from './TextInput';
import { Translation } from '../../translations';

type Props = {|
  placeholder: React.Element<typeof Translation>,
|};

export default class NumericInput extends React.Component<Props> {
  render = () => {
    return (
      <TextInput keyboardType="numeric" placeholder={this.props.placeholder} />
    );
  };
}
