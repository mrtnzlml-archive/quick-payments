// @flow

import * as React from 'react';
import {View} from 'react-native';
import {BarCodeScanner, Permissions} from 'expo';
import Translation from '_translations';
import {StyleSheet, Colors, Text, Touchable} from '_shared';
import {Switch} from '_navigation';
import {DashboardScene} from '_scenes';

type State = {|
  hasCameraPermission: boolean | null,
  performTransition: boolean,
|};

export default class BarcodeScanner extends React.Component<{||}, State> {
  state = {
    hasCameraPermission: null,
    performTransition: false,
  };

  componentWillMount = async () => {
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
  };

  transitionToDashboard = () => {
    this.setState({
      performTransition: true,
    });
  };

  handleBarCodeRead = ({data}: {data: string}) => {
    console.warn(data);
  };

  render = () => {
    if (this.state.performTransition) {
      return <Switch to={<DashboardScene />} />;
    }

    const {hasCameraPermission} = this.state;
    if (hasCameraPermission === null) {
      return (
        // TODO: design this (vv)
        <Translation id="BarcodeScanner.RequestingCameraPermission" />
      );
    } else if (hasCameraPermission === false) {
      return (
        // TODO: design this (vv)
        <Translation id="BarcodeScanner.NoCameraPermission" />
      );
    } else {
      return (
        <View style={styleSheet.barCodeScannerWrapper}>
          {/* <View style={[StyleSheet.absoluteFill, { backgroundColor: 'red' }]} /> */}
          <BarCodeScanner
            onBarCodeRead={this.handleBarCodeRead}
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
            style={StyleSheet.absoluteFill}
          />

          {/*
            These Views below create opacity around scan window (just a design).
          */}
          <View style={[styleSheet.opacityFrame, styleSheet.titleView]}>
            <Text style={styleSheet.title}>
              <Translation id="BarcodeScanner.ScanCode" />
            </Text>
          </View>
          <View style={styleSheet.verticalScanWindow}>
            <View style={styleSheet.opacityFrame} />
            <View style={styleSheet.horizontalScanWindow}>
              <View style={styleSheet.topLeftCorner} />
              <View style={styleSheet.topRightCorner} />
              <View style={styleSheet.bottomLeftCorner} />
              <View style={styleSheet.bottomRightCorner} />
            </View>
            <View style={styleSheet.opacityFrame} />
          </View>
          <View style={[styleSheet.opacityFrame, styleSheet.cancelView]}>
            <Touchable onPress={this.transitionToDashboard}>
              <Text style={styleSheet.cancel}>
                <Translation id="General.Cancel" />
              </Text>
            </Touchable>
          </View>
        </View>
      );
    }
  };
}

const sharedCornerStyles = {
  position: 'absolute',
  borderColor: Colors.white,
  width: 10,
  height: 10,
};

const cornerWidth = 3;

const styleSheet = StyleSheet.create({
  barCodeScannerWrapper: {
    flex: 1,
  },
  opacityFrame: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  titleView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
  },
  title: {
    color: Colors.white,
  },
  cancelView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancel: {
    color: Colors.white,
  },
  verticalScanWindow: {
    flexDirection: 'row',
    flex: 5,
  },
  horizontalScanWindow: {
    flex: 20,
  },

  /**
   * White corners around scan window.
   */
  topLeftCorner: {
    ...sharedCornerStyles,
    top: 0,
    left: 0,
    borderTopWidth: cornerWidth,
    borderLeftWidth: cornerWidth,
  },
  topRightCorner: {
    ...sharedCornerStyles,
    top: 0,
    right: 0,
    borderTopWidth: cornerWidth,
    borderRightWidth: cornerWidth,
  },
  bottomLeftCorner: {
    ...sharedCornerStyles,
    bottom: 0,
    left: 0,
    borderBottomWidth: cornerWidth,
    borderLeftWidth: cornerWidth,
  },
  bottomRightCorner: {
    ...sharedCornerStyles,
    bottom: 0,
    right: 0,
    borderBottomWidth: cornerWidth,
    borderRightWidth: cornerWidth,
  },
});
