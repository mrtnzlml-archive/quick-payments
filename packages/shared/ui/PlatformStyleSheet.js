// @flow

import { StyleSheet, Platform } from 'react-native'; // eslint-disable-line no-restricted-imports

import type { StylePropType } from '../index';

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
  create(styles: StylePropType): { [name: string]: number } {
    const platformStyles = {};
    Object.keys(styles).forEach(name => {
      let { ios, android, ...style } = { ...styles[name] };
      if (ios && Platform.OS === 'ios') {
        style = { ...style, ...ios };
      }
      if (android && Platform.OS === 'android') {
        style = { ...style, ...android };
      }
      platformStyles[name] = style;
    });
    return StyleSheet.create(platformStyles);
  },
};
