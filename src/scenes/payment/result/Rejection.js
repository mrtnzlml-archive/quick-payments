// @flow

import * as React from 'react';
import { View } from 'react-native';
import { SplitScreen, Icon, Colors } from 'mobile-quick-payments-shared';

export default () => (
  <SplitScreen
    backgroundColor={Colors.error}
    childrenTop={
      <View>
        <Icon name="clear" color={Colors.white} size={300} />
      </View>
    }
    childrenBottom={<View>{/* Show amount payed and button back */}</View>}
  />
);
