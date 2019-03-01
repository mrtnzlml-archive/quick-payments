// @flow

import * as React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {StyleSheet} from '_components';

export default function QueryRendererLoading() {
  return (
    <View style={styleSheet.container}>
      <ActivityIndicator />
    </View>
  );
}

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
