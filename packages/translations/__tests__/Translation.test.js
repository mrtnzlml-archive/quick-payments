// @flow

import Translation from '../Translation';

it('works with translation ID property', () => {
  // this will call the underlying translation engine
  expect(
    // $FlowExpectedError: string "ID test" is not a valid translation key
    Translation({
      id: 'ID test',
    }),
  ).toMatchSnapshot();
});

it('works with `passThrough` property', () => {
  // this will just return Text tag directly
  expect(
    Translation({
      passThrough: 'passThrough test',
    }),
  ).toMatchSnapshot();
});

it('throws exception for unclear properties', () => {
  expect(() =>
    // $FlowExpectedError: ID and passThrough at the same time is not a valid type
    Translation({
      id: 'ID test',
      passThrough: 'passThrough test',
    }),
  ).toThrowErrorMatchingSnapshot();
});
