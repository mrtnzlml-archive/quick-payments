// @flow

import Translation from '../Translation';

it('works with translation ID property', () => {
  // this will call the underlying translation engine
  expect(
    // $FlowExpectedError: string "ID test" is not a valid translation key
    new Translation({
      id: 'ID test',
    }).render(),
  ).toMatchSnapshot();
});

it('works with `passThrough` property', () => {
  // this will just return Text tag directly
  expect(
    new Translation({
      passThrough: 'passThrough test',
    }).render(),
  ).toMatchSnapshot();
});

it('throws exception for unclear properties', () => {
  expect(() =>
    // $FlowExpectedError: ID and passThrough at the same time is not a valid type
    new Translation({
      id: 'ID test',
      passThrough: 'passThrough test',
    }).render(),
  ).toThrowErrorMatchingSnapshot();
});

test.each([['string'], [123], [null]])(
  'works with almost any type of `passThrough` property - testing: %p',
  value => {
    expect(
      new Translation({
        passThrough: value,
      }).render(),
    ).toMatchSnapshot();
  },
);
