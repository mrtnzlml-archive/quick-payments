// @flow

import * as React from 'react';
import Renderer from 'react-test-renderer';

import {StatusIcon} from '../StatusIcon';

const $refType: any = null;

it('handles falsy values', () => {
  expect(Renderer.create(<StatusIcon data={{status: null, $refType}} />).toJSON()).toBeNull();

  expect(Renderer.create(<StatusIcon data={{status: undefined, $refType}} />).toJSON()).toBeNull();
});

it('renders status PAID', () => {
  expect(Renderer.create(<StatusIcon data={{status: 'PAID', $refType}} />)).toMatchSnapshot();
});

it('renders status FAIL', () => {
  expect(Renderer.create(<StatusIcon data={{status: 'FAILED', $refType}} />)).toMatchSnapshot();
});
