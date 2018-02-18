// @flow

export { default as Colors } from './ui/Colors';
export { default as Layout } from './ui/Layout';
export { default as StyleSheet } from './ui/PlatformStyleSheet';
export { default as Title } from './ui/Title';

/**
 * Styles are only reexported here to avoid importing internal RN libraries
 * everywhere (types are not exported directly).
 */
import type { StyleProp as NativeStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

export type StylePropType = NativeStyleProp;
