// @flow

import * as React from 'react';
import { View } from 'react-native';
import { SplitScreen, Icon, Colors } from 'mobile-quick-payments-shared';

/**
 * TODO: this page must be animated to avoid scam with static screenshots
 */
export default () => (
  <SplitScreen
    childrenTop={
      <View>
        <Icon name="check" color={Colors.white} size={300} />
      </View>
    }
    childrenBottom={<View>{/* Show amount payed and button back */}</View>}
  />
);
