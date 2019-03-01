// @flow

import getByPath, {getByStringPath} from '../getByPath';

it('works with object paths', () => {
  const root = {
    a: {
      b: 123,
    },
  };

  expect(getByPath(root, ['a', 'b'])).toBe(123);
  expect(getByStringPath(root, 'a.b')).toBe(123);
});

it('works with array paths', () => {
  const root = [[], [[21]]];
  expect(getByPath(root, [1, 0, 0])).toBe(21);
  expect(getByStringPath(root, '[1][0][0]')).toBe(21);
});

it('works with object and array paths', () => {
  const root = {
    a: {
      b: [{c: 1}, {c: 2}, {c: 3}],
    },
  };

  expect(getByPath(root, ['a', 'b', 1, 'c'])).toBe(2);
  expect(getByStringPath(root, 'a.b[1].c')).toBe(2);

  expect(getByPath(root, ['a', 'b', '2', 'c'])).toBe(3);
  expect(getByStringPath(root, 'a.b[2].c')).toBe(3);
});

it('returns undefined when path does not exist', () => {
  let root = {
    a: {
      b: 123,
    },
  };
  expect(getByPath(root, ['a', 'b', 'c'])).toBeUndefined();
  expect(getByStringPath(root, 'a.b.c')).toBeUndefined();

  root = {
    a: {
      b: [{c: 1}, {c: 2}, {c: 3}],
    },
  };
  expect(getByPath(root, ['a', 'b', '3', 'c'])).toBeUndefined();
  expect(getByStringPath(root, 'a.b[3].c')).toBeUndefined();
});

it('returns null as a fallback value', () => {
  const root = {
    a: {
      b: 123,
    },
  };

  expect(getByPath(root, ['a', 'b', 'c'], null)).toBeNull();
  expect(getByStringPath(root, 'a.b.c', null)).toBeNull();
});

it('supports paths with asterisk (*)', () => {
  const root = {
    a: [
      {
        b: {c: 111},
      },
      {
        b: {c: 222},
      },
    ],
  };

  expect(getByPath(root, ['a', '*', 'b', 'c'], null)).toEqual([111, 222]);
  expect(getByStringPath(root, 'a[*].b.c', null)).toEqual([111, 222]);
});

it('supports paths with many asterisks (*)', () => {
  const root = {
    a: [
      {
        b: {c: [{d: {e: 111}}, {d: {e: 222}}]},
      },
      {
        b: {c: [{d: {e: 333}}, {d: {e: 444}}]},
      },
    ],
  };

  expect(getByPath(root, ['a', '*', 'b', 'c', '*', 'd', 'e'], null)).toEqual([
    [111, 222],
    [333, 444],
  ]);
  expect(getByStringPath(root, 'a[*].b.c[*].d.e', null)).toEqual([
    [111, 222],
    [333, 444],
  ]);
  expect(getByStringPath(root, 'a[1].b.c[*].d.e', null)).toEqual([333, 444]);
  expect(getByStringPath(root, 'a[*].b.c[1].d.e', null)).toEqual([222, 444]);
});
