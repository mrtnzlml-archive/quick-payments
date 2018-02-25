// @flow

export { default as Button } from './forms/Button';
export { default as TextInput } from './forms/TextInput';

export { default as Colors } from './ui/Colors';
export { default as Icon } from './ui/Icon';
export { default as Layout } from './ui/Layout';
export { default as StyleSheet } from './ui/PlatformStyleSheet';
export { default as SplitScreen } from './ui/SplitScreen';
export { default as Text } from './ui/Text';
export { default as Title } from './ui/Title';

export { default as Dimensions } from './Dimensions';

export { default as SafeAreaView } from 'react-native-safe-area-view';

/**
 * Styles are only reexported here to avoid importing internal RN libraries
 * everywhere (types are not exported directly).
 */
import type { StyleProp as NativeStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

export type StylePropType = NativeStyleProp;
