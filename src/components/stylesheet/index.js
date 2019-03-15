// @flow

import {StyleSheet, Platform} from 'react-native'; // eslint-disable-line no-restricted-imports
// $FlowExpectedError: we are importing file declared as [untyped] in the .flowconfig because of broken RN types
import type {StyleProp as NativeStyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';

export type StylePropType = NativeStyleProp;

/**
 * This StyleSheet allows to define platform differences easily:
 *
 * const styles = StyleSheet.create({
 *   container: {
 *     flexDirection: 'row',
 *     ios: {
 *       padding: 10,
 *     },
 *     android: {
 *       padding: 20,
 *     },
 *   }
 * })
 */
export default {
  /**
   * {
   *   "bottom": 0,
   *   "left": 0,
   *   "position": "absolute",
   *   "right": 0,
   *   "top": 0,
   * }
   */
  absoluteFill: StyleSheet.absoluteFill,

  flatten: StyleSheet.flatten,

  hairlineWidth: StyleSheet.hairlineWidth,

  /**
   * Creates a StyleSheet style reference from the given object.
   */
  create(styles: NativeStyleProp): {[name: string]: number} {
    const platformStyles = {};
    Object.keys(styles).forEach(name => {
      let {ios, android, ...style} = {...styles[name]};
      if (ios && Platform.OS === 'ios') {
        style = {...style, ...ios};
      }
      if (android && Platform.OS === 'android') {
        style = {...style, ...android};
      }
      platformStyles[name] = style;
    });
    return StyleSheet.create(platformStyles);
  },
};
