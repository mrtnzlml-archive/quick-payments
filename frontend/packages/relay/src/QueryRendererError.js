// @flow

import * as React from 'react';
import {View} from 'react-native';
import {StyleSheet, Button} from '_shared';
import Translation from '_translations';

type Props = {|
  +onTryAgain: ?() => void,
|};

export default function QueryRendererError(props: Props) {
  return (
    <View style={styleSheet.container}>
      <Translation id="General.QueryRenderer.Error.Title" />
      {props.onTryAgain && (
        <Button
          title={<Translation id="General.QueryRenderer.Error.TryAgain" />}
          onPress={props.onTryAgain}
        />
      )}
    </View>
  );
}

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
