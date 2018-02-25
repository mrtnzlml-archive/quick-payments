// @flow

import * as React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import type { StylePropType } from '../index';

import Color from './Colors';

type Props = {|
  name: string,
  size: number,
  color?: string,
  style?: StylePropType,
|};

/**
 * Currently only supported package is "MaterialIcons".
 * @see https://material.io/icons/
 */
function Icon(props: Props) {
  return <MaterialIcons {...props} />;
}

Icon.defaultProps = {
  name: 'warning',
  size: 20,
  color: Color.grey.$500,
};

export default Icon;
