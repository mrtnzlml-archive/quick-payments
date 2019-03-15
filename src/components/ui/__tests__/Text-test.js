// @flow

import * as React from 'react';
import Renderer from 'react-test-renderer';

import Text from '../../typography/Text';

it('is possible to use Text component with children', () => {
  // $FlowExpectedError: children should be type of Translation in real code
  expect(Renderer.create(<Text>OK</Text>)).toMatchSnapshot();
});

it('is possible to use Text component without children', () => {
  expect(Renderer.create(<Text />)).toMatchSnapshot();
});

it('is possible to use Text component with custom styles', () => {
  expect(
    // $FlowExpectedError: children should be type of Translation in real code
    Renderer.create(<Text style={{color: 'red'}}>Styled OK</Text>),
  ).toMatchSnapshot();
});
