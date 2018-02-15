// @flow

import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { Actions } from 'react-native-router-flux';
import { Translation } from 'mobile-quick-payments-translations';

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

  handleBarCodeRead = ({ data }: { data: string }) => {
    // console.warn(data);
    Actions.payment();
  };

  render = () => {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return (
        <Text>
          <Translation id="BarcodeScanner.RequestingCameraPermission" />
        </Text>
      );
    } else if (hasCameraPermission === false) {
      return (
        <Text>
          <Translation id="BarcodeScanner.NoCameraPermission" />
        </Text>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          <BarCodeScanner
            onBarCodeRead={this.handleBarCodeRead}
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
            style={StyleSheet.absoluteFill}
          />
        </View>
      );
    }
  };
}
