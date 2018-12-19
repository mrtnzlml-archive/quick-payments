// @flow

import {_normalizeLocale} from '../Device';

it('resolves valid locales', () => {
  expect(_normalizeLocale('en')).toBe('en');
  expect(_normalizeLocale('es-419')).toBe('es');
});

it('falls back for invalid values', () => {
  // language is not supported
  expect(_normalizeLocale('cz')).toBe('en');

  // language tag is invalid
  expect(_normalizeLocale('-es-419')).toBe('en');
});
