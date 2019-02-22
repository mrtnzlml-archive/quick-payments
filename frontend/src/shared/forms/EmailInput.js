// @flow

import * as React from 'react';
import Translation from '_translations';
import {debounce} from '_utils';

import TextInput from './TextInput';

type Props = {|
  +placeholder: React.Element<typeof Translation>,
  +onValidation?: boolean => void, // FIXME: this is being injected in FormGroup component
|};

type State = {|
  isValid: boolean,
|};

export default class EmailInput extends React.Component<Props, State> {
  state = {
    isValid: true,
  };

  /**
   * Please note: this actually doesn't validate the text to be an input.
   * Why? Because nobody cares. Nobody is going to enter email like
   * "áéíóúý@ÁÉÍÓÚÝð" into an email field by accident, and that is all
   * front-end validation is for: to prevent people from accidentally
   * entering the wrong bit of information, such as their name, in an
   * email field.
   *
   * Email must be validated through verification link.
   */
  validateEmail = (emailAddress: string): boolean => {
    return /^(\S+@\S+)$/.test(emailAddress);
  };

  handleInputChange = (text: string) => {
    const isValid = this.validateEmail(text);
    this.setState(
      {
        isValid,
      },
      () => {
        if (this.props.onValidation) {
          // TODO: this should be enforced otherwise FormGroup won't work
          this.props.onValidation(isValid);
        }
      },
    );
  };

  render = () => {
    return (
      <TextInput
        keyboardType="email-address"
        placeholder={this.props.placeholder}
        onChangeText={debounce(this.handleInputChange, 1000)}
        errorMessage={
          this.state.isValid ? (
            undefined
          ) : (
            <Translation id="General.Form.Validation.Email" />
          )
        }
      />
    );
  };
}
