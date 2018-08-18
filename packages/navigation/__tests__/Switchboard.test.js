// @flow

import * as React from 'react';
import TestRenderer from 'react-test-renderer';

import { RegisterSwitch, Switchboard, Switch } from '../index';

const MockedScene = ({
  shouldThrow,
  message
}: {|
  +shouldThrow?: boolean,
  +message?: string
|}) => {
  if (shouldThrow) {
    throw new Error('This component should not be rendered.');
  }
  return message || 'ok';
};

it('renders only the first registered component', () => {
  const Application = (
    <Switchboard>
      <RegisterSwitch path="/A" component={<MockedScene />} />
      <RegisterSwitch
        path="/B"
        component={<MockedScene shouldThrow={true} />}
      />
      <RegisterSwitch
        path="/C"
        component={<MockedScene shouldThrow={true} />}
      />
    </Switchboard>
  );

  expect(
    TestRenderer.create(Application).getInstance().state
  ).toMatchSnapshot();

  expect(TestRenderer.create(Application).toJSON()).toBe('ok');
});

it('throw an error when you try to register two switches with the same name', () => {
  expect(() =>
    TestRenderer.create(
      <Switchboard>
        <RegisterSwitch path="/A" component={<MockedScene />} />
        <RegisterSwitch path="/A" component={<MockedScene />} />
      </Switchboard>
    )
  ).toThrow(
    "Route with path '/A' already exists and therefore you cannot register it again."
  );
});

it('switches the scenes declaratively', () => {
  const Application = (
    <Switchboard>
      <RegisterSwitch
        path="/A"
        component={
          <React.Fragment>
            <Switch to="/B" />
            <MockedScene /> {/* This component will be mounted and rendered! */}
          </React.Fragment>
        }
      />
      <RegisterSwitch path="/B" component={<MockedScene message="BBB" />} />
      <RegisterSwitch
        path="/C"
        component={<MockedScene shouldThrow={true} />}
      />
    </Switchboard>
  );

  expect(
    TestRenderer.create(Application).getInstance().state
  ).toMatchSnapshot();

  expect(TestRenderer.create(Application).toJSON()).toBe('BBB');
});

it('throws when you try to switch to non-existent route', () => {
  const Application = (
    <Switchboard>
      <RegisterSwitch
        path="/"
        component={
          <React.Fragment>
            <Switch to="/unknown-route-wtf" />
          </React.Fragment>
        }
      />
    </Switchboard>
  );

  expect(() => TestRenderer.create(Application)).toThrowErrorMatchingSnapshot();
});
