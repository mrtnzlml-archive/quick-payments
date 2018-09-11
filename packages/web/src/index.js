/* eslint-disable */

import * as React from 'react';
import ReactDOM from 'react-dom';
import {Text, Touchable, Layout, StyleSheet, Colors} from '_shared';
import {View} from 'react-native';

const styleSheet = StyleSheet.create({
  container: {
    backgroundColor: Colors.orange.$200,
  },
});

// TODO: make Relay work

function throwAlert() {
  alert('ok');
}

ReactDOM.render(
  <Layout title="React Native Web TEST">
    <View style={styleSheet.container}>
      <Text>
        Hello,{' '}
        <Touchable onPress={throwAlert}>
          <>world</>
        </Touchable>
        !
      </Text>
    </View>
  </Layout>,
  document.getElementById('root'),
);
