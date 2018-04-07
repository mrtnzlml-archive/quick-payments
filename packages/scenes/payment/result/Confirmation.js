// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  SplitScreen,
  Icon,
  Colors,
  StyleSheet,
} from 'mobile-quick-payments-shared';

/**
 * TODO: this page must be animated to avoid scam with static screenshots
 */
export default () => (
  <SplitScreen
    childrenTop={
      <View style={styleSheet.container}>
        <Icon name="check" color={Colors.white} size={300} />
      </View>
    }
    childrenBottom={<View>{/* Show amount payed and button back */}</View>}
  />
);

const styleSheet = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
