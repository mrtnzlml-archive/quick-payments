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

/**
 * Welcome page of the onboarding should combine login and registration into
 * one simple process.
 */
export default () => (
  <SplitScreen
    childrenTop={
      <View>
        <Title style={styleSheet.title}>
          <Translation id="Onboarding.Title" />
        </Title>
        <Text>
          <Translation id="Onboarding.Subtitle" />
        </Text>
      </View>
    }
    childrenBottom={
      // TODO: submit only if all fields are valid
      <FormGroup>
        <EmailInput placeholder={<Translation id="Onboarding.Email" />} />
        <Button
          title={<Translation id="Onboarding.Email.Submit" />}
          onPress={VoidAction}
        />
      </FormGroup>
    }
  />
);

const styleSheet = StyleSheet.create({
  title: {
    color: Colors.white,
  },
});
