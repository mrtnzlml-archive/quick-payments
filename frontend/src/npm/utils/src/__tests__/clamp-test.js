// @flow

import clamp from '../clamp';

const MIN = 1;
const MAX = 11;

it('returns MAX when the value is higher', () => {
  expect(clamp(111, MIN, MAX)).toBe(11);
});

it('returns MIN when the value is lower', () => {
  expect(clamp(-111, MIN, MAX)).toBe(1);
});

it('returns the actual value', () => {
  expect(clamp(5, MIN, MAX)).toBe(5);
});

it('returns boundary values', () => {
  expect(clamp(1, MIN, MAX)).toBe(1);
  expect(clamp(11, MIN, MAX)).toBe(11);
});

it('works with wird values', () => {
  expect(clamp(0, MIN, MAX)).toBe(1);
  expect(clamp(Infinity, MIN, MAX)).toBe(11);
  expect(clamp(-Infinity, MIN, MAX)).toBe(1);
});
