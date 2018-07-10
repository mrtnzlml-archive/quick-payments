// @flow

import Device from '../Device';

let mock_LOCALE = undefined;
afterEach(() => {
  mock_LOCALE = undefined;
});

jest.mock('expo', () => ({
  DangerZone: {
    Localization: {
      getCurrentLocaleAsync: () => Promise.resolve(mock_LOCALE)
    }
  }
}));

it('resolves valid locales', async () => {
  mock_LOCALE = 'en';
  await expect(Device.getCurrentLocaleAsync()).resolves.toBe('en');

  mock_LOCALE = 'es-419';
  await expect(Device.getCurrentLocaleAsync()).resolves.toBe('es');
});

it('falls back for invalid values', async () => {
  mock_LOCALE = 'cz'; // language is not supported
  await expect(Device.getCurrentLocaleAsync()).resolves.toBe('en');

  mock_LOCALE = '-es-419'; // language tag is invalid
  await expect(Device.getCurrentLocaleAsync()).resolves.toBe('en');
});
