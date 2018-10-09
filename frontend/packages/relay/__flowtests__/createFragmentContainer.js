// @flow

import * as React from 'react';
import {createFragmentContainer} from '_relay';

const Component = (props: {|+data: string|}) => <React.Fragment />;

const Container = createFragmentContainer(
  Component,
  // $FlowExpectedError: this should be a real fragment
  'mocked',
);

module.exports = {
  checkMissingProperty() {
    // $FlowExpectedError: missing `data` property
    return <Container />;
  },
  checkInvalidProperty() {
    // $FlowExpectedError: data property value should be string (not number)
    return <Container data={1} />;
  },
  checkValidProperty() {
    return <Container data="ok" />;
  },
  checkToManyProperties() {
    // $FlowExpectedError: `extraProp` should not be here
    return <Container data="ok" extraProp={-1} />;
  },
};
