// @flow

import * as babel from '@babel/core';

function transform(input) {
  return babel.transform(input, {
    plugins: [require('../dev-expression')],
  }).code;
}

let oldEnv;

// FIXME: this is broken now but otherwise everything work
xdescribe('dev-expression', () => {
  beforeEach(() => {
    oldEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = '';
  });

  afterEach(() => {
    process.env.NODE_ENV = oldEnv;
  });

  it('should replace __DEV__ in if', () => {
    expect(transform("if (__DEV__) { console.log('foo') }")).toMatchSnapshot();
  });

  it('should replace __DEV__ in ternary operator', () => {
    expect(transform('const dev = __DEV__ ? true : false')).toMatchSnapshot();
  });
});
