// @flow

import * as React from 'react';
import Renderer from 'react-test-renderer';

import Text from '../Text';

const VoidComponent = () => 'VOID';

it('is possible to use Text component with child', () => {
  expect(
    Renderer.create(
      <Text>
        {/* $FlowExpectedError: children should be type of Translation in real code */}
        <VoidComponent />
      </Text>,
    ),
  ).toMatchSnapshot();
});

it('is possible to use Text component without children', () => {
  expect(Renderer.create(<Text />)).toMatchSnapshot();
});

it('is possible to use Text component with custom styles', () => {
  expect(
    // $FlowExpectedError: children should be type of Translation in real code
    Renderer.create(
      <Text style={{ color: 'red' }}>
        {/* $FlowExpectedError: children should be type of Translation in real code */}
        <VoidComponent />
      </Text>,
    ),
  ).toMatchSnapshot();
});
