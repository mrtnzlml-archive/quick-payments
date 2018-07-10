// @flow

import { Dimensions } from 'react-native'; // eslint-disable-line no-restricted-imports

type DimensionsType = {|
  +width: number,
  +height: number,
|};

export default {
  get: (): DimensionsType => Dimensions.get('screen'),
};
