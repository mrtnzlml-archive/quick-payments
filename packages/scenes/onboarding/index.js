// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  Colors,
  Title,
  Text,
  SplitScreen,
  EmailInput,
  Button,
  FormGroup,
} from 'mobile-quick-payments-shared';
import Translation from 'mobile-quick-payments-translations';

const OnboardingTop = () => (
  <View>
    <Title style={styleSheet.title}>
      <Translation id="Onboarding.Title" />
    </Title>
    <Text>
      <Translation id="Onboarding.Subtitle" />
    </Text>
  </View>
);

// TODO: submit only if all fields are valid
class OnboardingBottom extends React.Component<{||}, { formIsValid: boolean }> {
  state = {
    formIsValid: false,
  };

  handleValidationFormCheck = isValid =>
    this.setState({
      formIsValid: isValid,
      // TODO: form values (?)
    });

  handleFormSubmit = () => console.warn('TODO: form values');

  render = () => (
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
}

/**
 * Welcome page of the onboarding should combine login and registration into
 * one simple process.
 */
export default () => (
  <SplitScreen
    childrenTop={<OnboardingTop />}
    childrenBottom={<OnboardingBottom />}
  />
);

const styleSheet = StyleSheet.create({
  title: {
    color: Colors.white,
  },
});
