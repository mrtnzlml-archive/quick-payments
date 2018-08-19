// @flow

export {default as Button} from './forms/Button';
export {default as EmailInput} from './forms/EmailInput';
export {default as FormGroup} from './forms/FormGroup';
export {default as NumericInput} from './forms/NumericInput';
// export { default as TextInput } from './forms/TextInput'; // not exported because we should use the specific inputs

export {default as Colors} from './ui/Colors';
export {default as Icon} from './ui/Icon';
export {default as Layout} from './ui/Layout';
export {default as StyleSheet} from './ui/PlatformStyleSheet';
export {default as SplitScreen} from './ui/SplitScreen';
export {default as Text} from './ui/Text';
export {default as Title} from './ui/Title';
export {default as Touchable} from './ui/Touchable';

export {default as Device} from './Device';
export {default as Dimensions} from './Dimensions';
export {default as Price} from './Price';

export {default as SafeAreaView} from 'react-native-safe-area-view';

/**
 * Styles are only reexported here to avoid importing internal RN libraries
 * everywhere (types are not exported directly).
 */
// $FlowExpectedError: we are importing file declared as [untyped] in the .flowconfig because of broken RN types
import type {StyleProp as NativeStyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';

export type StylePropType = NativeStyleProp;
