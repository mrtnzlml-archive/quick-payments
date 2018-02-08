// @flow

import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

type State = {|
  hasCameraPermission: boolean | null,
|};

export default class BarcodeScanner extends React.Component<{||}, State> {
  state = {
    hasCameraPermission: null,
  };

  componentWillMount = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  render = () => {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <BarCodeScanner
            onBarCodeRead={this.handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
        </View>
      );
    }
  };

  handleBarCodeRead = ({ type, data }: { type: string, data: string }) => {
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
}
