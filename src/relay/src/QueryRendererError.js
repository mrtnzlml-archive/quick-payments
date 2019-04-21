// @flow

import * as React from 'react';
import {View} from 'react-native';
import Button from '_components/forms/Button';
import StyleSheet from '_components/stylesheet';

type Props = {|
  +title: string,
  +onTryAgain: ?() => void,
|};

export default function QueryRendererError(props: Props) {
  return (
    <View style={styleSheet.container}>
      {props.title}
      {props.onTryAgain && (
        <Button title="Try again" onPress={props.onTryAgain} />
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
