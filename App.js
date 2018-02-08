// @flow

import * as React from 'react';

import BarcodeScanner from './src/BarcodeScanner';

export default class App extends React.Component<{||}> {
  render = () => <BarcodeScanner />;
}
