// @flow

import * as React from 'react';
import Colors from '_components/Colors';
import Button from '_components/forms/Button';
import FormGroup from '_components/forms/FormGroup';
import EmailInput from '_components/forms/EmailInput';
import SplitScreen from '_components/layout/SplitScreen';
import StyleSheet from '_components/stylesheet';
import Title from '_components/typography/Title';
import Translation from '_translations';
import warning from 'util/warning';

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
|};

// TODO: submit only if all fields are valid
class OnboardingBottom extends React.Component<{||}, State> {
  state = {
    formIsValid: false,
  };

  handleValidationFormCheck = isValid =>
    this.setState({
      formIsValid: isValid,
      // TODO: form values (?)
    });

  handleFormSubmit = () => {
    warning(false, 'TODO: form values');
  };

  render = () => {
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
export default function OnboardingScene() {
  return (
    <SplitScreen
      childrenTop={<OnboardingTop />}
      childrenBottom={<OnboardingBottom />}
    />
  );
}

const styleSheet = StyleSheet.create({
  title: {
    color: Colors.white,
  },
});
