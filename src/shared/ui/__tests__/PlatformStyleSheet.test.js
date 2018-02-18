// @flow

import { Platform } from 'react-native';

import StyleSheet from '../PlatformStyleSheet';

let originalPlatform;
beforeEach(() => (originalPlatform = Platform.OS));
afterEach(() => (Platform.OS = originalPlatform));

const createStyle = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      ios: {
        padding: 10,
      },
      android: {
        padding: 20,
      },
    },
  });

it('works with iOS', () => {
  Platform.OS = 'ios';
  expect(createStyle()).toEqual({
    container: { flexDirection: 'row', padding: 10 },
  });
});

it('works with Android', () => {
  Platform.OS = 'android';
  expect(createStyle()).toEqual({
    container: { flexDirection: 'row', padding: 20 },
  });
});

it('works with unknown platform', () => {
  Platform.OS = 'unknown platform';
  expect(createStyle()).toEqual({
    container: { flexDirection: 'row' },
  });
});

it('exports absolute fill object', () => {
  expect(StyleSheet.absoluteFill).toMatchSnapshot();
  expect({
    ...StyleSheet.absoluteFill,
    position: 'relative',
  }).toMatchSnapshot();
});

it('exports hairline width', () => {
  expect(StyleSheet.hairlineWidth).toMatchSnapshot();
});
