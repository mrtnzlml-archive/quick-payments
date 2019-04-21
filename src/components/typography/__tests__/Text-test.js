// @flow

import * as React from 'react';
import Renderer from 'react-test-renderer';

import Text from '../Text';

it('is possible to use Text component with children', () => {
  expect(Renderer.create(<Text>OK</Text>)).toMatchSnapshot();
});

it('is possible to use Text component without children', () => {
  expect(Renderer.create(<Text />)).toMatchSnapshot();
});

it('is possible to use Text component with custom styles', () => {
  expect(
    Renderer.create(<Text style={{color: 'red'}}>Styled OK</Text>),
  ).toMatchSnapshot();
});
