// @flow

import EmailInput from '../EmailInput.js';

it('validates basic emails', () => {
  // please note - purpose of this validation is not to verify the email but to avoid mistakes
  const input = new EmailInput();

  // valid addresses
  expect(input.validateEmail('a@b')).toBe(true);
  expect(input.validateEmail('a@b@c')).toBe(true);
  expect(input.validateEmail('email@gmail.com')).toBe(true);

  // clearly invalid addresses
  expect(input.validateEmail('ab')).toBe(false); // missing "@"
  expect(input.validateEmail('a b@c')).toBe(false); // only non-whitespace characters allowed
  expect(input.validateEmail(' a@b')).toBe(false); // leading space
  expect(input.validateEmail('a@b ')).toBe(false); // trailing space
});
