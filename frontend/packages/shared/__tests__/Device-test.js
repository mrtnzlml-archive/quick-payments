// @flow

import Device from '../Device';

let mockLOCALE = undefined;
afterEach(() => {
  mockLOCALE = undefined;
});

jest.mock('expo', () => ({
  DangerZone: {
    Localization: {
      getCurrentLocaleAsync: () => Promise.resolve(mockLOCALE),
    },
  },
}));

it('resolves valid locales', async () => {
  mockLOCALE = 'en';
  await expect(Device.getCurrentLocaleAsync()).resolves.toBe('en');

  mockLOCALE = 'es-419';
  await expect(Device.getCurrentLocaleAsync()).resolves.toBe('es');
});

it('falls back for invalid values', async () => {
  mockLOCALE = 'cz'; // language is not supported
  await expect(Device.getCurrentLocaleAsync()).resolves.toBe('en');

  mockLOCALE = '-es-419'; // language tag is invalid
  await expect(Device.getCurrentLocaleAsync()).resolves.toBe('en');
});
