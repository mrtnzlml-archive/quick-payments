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
import { Translation } from 'mobile-quick-payments-translations';

const VoidAction = () => {}; // TODO

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
const OnboardingBottom = () => (
  <FormGroup>
    <EmailInput placeholder={<Translation id="Onboarding.Email" />} />
    <Button
      title={<Translation id="Onboarding.Email.Submit" />}
      onPress={VoidAction}
    />
  </FormGroup>
);

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
