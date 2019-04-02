// @flow

import * as React from 'react';
import {View} from 'react-native';
import Text from '_components/typography/Text';
import StyleSheet from '_components/stylesheet';

type State = {|
  width: null | number,
  height: null | number,
|};

export default class Card extends React.Component<{||}, State> {
  state = {
    width: null,
    height: null,
  };

  calculateCardDimensions = ({
    nativeEvent,
  }: {|
    +nativeEvent: {|
      +layout: {|
        +width: number,
        +height: number,
      |},
    |},
  |}) => {
    const {width} = nativeEvent.layout;
    this.setState({
      // https://graphicdesign.stackexchange.com/a/632
      width,
      height: width / 1.8,
    });
  };

  render() {
    return (
      <View
        onLayout={this.calculateCardDimensions}
        style={[
          styleSheet.cardWrapper,
          {
            height: this.state.height,
            width: this.state.width,
          },
        ]}
      >
        <View style={styleSheet.cardInfo}>
          <Text style={styleSheet.cardNumber}>1234 1234 1234 1234</Text>
          <Text style={styleSheet.cardName}>John Doe</Text>
        </View>

        {/* TODO: logo: mastercard, visa */}
        {/* TODO: card number */}
        {/* TODO: name */}
        {/* TODO: expiration date */}
      </View>
    );
  }
}

const styleSheet = StyleSheet.create({
  cardWrapper: {
    backgroundColor: '#b3d3f5',
    borderRadius: 10,
  },
  cardInfo: {
    paddingLeft: 20,
    position: 'absolute',
    bottom: 50,
  },
  cardNumber: {
    color: 'white',
    fontWeight: 'bold',
  },
  cardName: {
    color: 'white',
  },
});
