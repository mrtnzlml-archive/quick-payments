// @flow

import * as React from 'react';
import {MaterialIcons} from '@expo/vector-icons';

import Color from './Colors';
import type {StylePropType} from './stylesheet';

type Props = {|
  +name: string,
  +size: number,
  +color?: string,
  +style?: StylePropType,
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
  color: Color.text,
};

export default Icon;
