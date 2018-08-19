// @flow

import * as React from 'react';
import TestRenderer from 'react-test-renderer';

import {Switchboard, Switch} from '../index';

const MockedScene = ({shouldThrow, message}: {|+shouldThrow?: boolean, +message?: string|}) => {
  if (shouldThrow) {
    throw new Error('This component should not be rendered.');
  }
  return message || 'ok';
};

it('renders the initial scene', () => {
  expect(TestRenderer.create(<Switchboard initialScene={<MockedScene />} />).toJSON()).toBe('ok');
});

it('renders the latest switched component', () => {
  expect(
    TestRenderer.create(
      <Switchboard
        initialScene={
          <React.Fragment>
            {/* this first component will be rendered anyway but replaced later */}
            <MockedScene message="A" />
            <Switch to={<MockedScene message="B" />} />
            <Switch to={<MockedScene message="C" />} />
          </React.Fragment>
        }
      />,
    ).toJSON(),
  ).toBe('C');
});

it('can handle nested switches', () => {
  expect(
    TestRenderer.create(
      <Switchboard
        initialScene={<Switch to={<Switch to={<Switch to={<MockedScene />} />} />} />}
      />,
    ).toJSON(),
  ).toBe('ok');
});
