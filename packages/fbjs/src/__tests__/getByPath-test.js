// @flow

import getByPath from '../getByPath';

it('works with object paths', () => {
  expect(
    getByPath(
      {
        a: {
          b: 123,
        },
      },
      ['a', 'b'],
    ),
  ).toBe(123);
});

it('works with array paths', () => {
  expect(getByPath([[], [[21]]], [1, 0, 0])).toBe(21);
});

it('works with object and array paths', () => {
  expect(
    getByPath(
      {
        a: {
          b: [{c: 1}, {c: 2}, {c: 3}],
        },
      },
      ['a', 'b', 1, 'c'],
    ),
  ).toBe(2);

  expect(
    getByPath(
      {
        a: {
          b: [{c: 1}, {c: 2}, {c: 3}],
        },
      },
      ['a', 'b', '2', 'c'],
    ),
  ).toBe(3);
});

it('returns undefined when path does not exist', () => {
  expect(
    getByPath(
      {
        a: {
          b: 123,
        },
      },
      ['a', 'b', 'c'],
    ),
  ).toBe(undefined);

  expect(
    getByPath(
      {
        a: {
          b: [{c: 1}, {c: 2}, {c: 3}],
        },
      },
      ['a', 'b', '3', 'c'],
    ),
  ).toBe(undefined);
});

it('returns null as a fallback value', () => {
  expect(
    getByPath(
      {
        a: {
          b: 123,
        },
      },
      ['a', 'b', 'c'],
      null,
    ),
  ).toBeNull();
});

it('supports paths with asterisk (*)', () => {
  expect(
    getByPath(
      {
        a: [
          {
            b: {c: 111},
          },
          {
            b: {c: 222},
          },
        ],
      },
      ['a', '*', 'b', 'c'],
      null,
    ),
  ).toEqual([111, 222]);
});

it('supports paths with many asterisks (*)', () => {
  expect(
    getByPath(
      {
        a: [
          {
            b: {c: [{d: {e: 111}}, {d: {e: 222}}]},
          },
          {
            b: {c: [{d: {e: 333}}, {d: {e: 444}}]},
          },
        ],
      },
      ['a', '*', 'b', 'c', '*', 'd', 'e'],
      null,
    ),
  ).toEqual([[111, 222], [333, 444]]);
});
