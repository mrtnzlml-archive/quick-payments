// @flow

import * as React from 'react';
import Renderer from 'react-test-renderer';

import Price from '../Price';

it('renders Price component as expected', () => {
  expect(
    Renderer.create(<Price amount={0} currency="MXN" />),
  ).toMatchSnapshot();

  expect(
    Renderer.create(<Price amount={10.456} currency="MXN" />),
  ).toMatchSnapshot();

  expect(
    Renderer.create(<Price amount={1e6} currency="MXN" />),
  ).toMatchSnapshot();
});

it('handles falsy values', () => {
  expect(
    Renderer.create(<Price amount={null} currency="MXN" />).toJSON(),
  ).toBeNull();

  expect(
    Renderer.create(<Price amount={10} currency={null} />).toJSON(),
  ).toBeNull();

  expect(
    Renderer.create(<Price amount={null} currency={null} />).toJSON(),
  ).toBeNull();
});
