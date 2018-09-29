// @flow

import * as React from 'react';
import {StyleSheet, Colors, Title, SplitScreen, EmailInput, Button, FormGroup} from '_shared';
import Translation from '_translations';
import {Switch} from '_navigation';
import {warning} from '_fbjs';

const OnboardingTop = () => (
  <React.Fragment>
    <Title style={styleSheet.title}>
      <Translation id="Onboarding.Title" />
    </Title>
    <Translation id="Onboarding.Subtitle" />
  </React.Fragment>
);

type State = {|
  formIsValid: boolean,
  submitFormTo: null | string,
|};

// TODO: submit only if all fields are valid
class OnboardingBottom extends React.Component<{||}, State> {
  state = {
    formIsValid: false,
    submitFormTo: null,
  };

  handleValidationFormCheck = isValid =>
    this.setState({
      formIsValid: isValid,
      // TODO: form values (?)
    });

  handleFormSubmit = () => {
    this.setState({
      submitFormTo: '/dashboard',
    });

    warning(false, 'TODO: form values');
  };

  render = () => {
    if (this.state.submitFormTo !== null) {
      return <Switch to={this.state.submitFormTo} />;
    }

    return (
      <FormGroup onValidationCheck={this.handleValidationFormCheck}>
        <EmailInput placeholder={<Translation id="Onboarding.Email" />} />

        <Button
          disabled={!this.state.formIsValid}
          omitValidation={true}
          title={<Translation id="Onboarding.Email.Submit" />}
          onPress={this.handleFormSubmit}
        />
      </FormGroup>
    );
  };
}

/**
 * Welcome page of the onboarding should combine login and registration into
 * one simple process.
 */
export default () => (
  <SplitScreen childrenTop={<OnboardingTop />} childrenBottom={<OnboardingBottom />} />
);

const styleSheet = StyleSheet.create({
  title: {
    color: Colors.white,
  },
});
