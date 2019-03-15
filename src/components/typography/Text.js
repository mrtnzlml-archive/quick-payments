// @flow

import * as React from 'react';
import RN from 'react-native';
import Translation from '_translations';

import StyleSheet from '../stylesheet';
import Colors from '../Colors';
import type {StylePropType} from '../stylesheet';

type Props = {|
  +children?: React$Element<typeof Translation>,
  +style?: StylePropType,
|};

const TextContext: React$Context<{|
  +isNested: boolean,
|}> = React.createContext({
  isNested: false,
});

/**
 * Default styling must be applied only on the root Text component.
 */
const RootText = ({children, style}) => (
  <TextContext.Provider value={{isNested: true}}>
    <RN.Text style={[styleSheet.defaultText, style]}>{children}</RN.Text>
  </TextContext.Provider>
);

/**
 * Style property may be `undefined`. Style `undefined` in nested Text
 * components indicates style inheritance in RN.
 */
const NestedText = ({children, style}) => (
  <RN.Text style={style}>{children}</RN.Text>
);

export default class Text extends React.Component<Props> {
  // note: this must be class (not functional component) to work properly
  // with Animated library from RN

  render = () => {
    const {children} = this.props;

    return (
      <TextContext.Consumer>
        {({isNested}) => {
          return isNested === true ? (
            <NestedText style={this.props.style}>{children}</NestedText>
          ) : (
            <RootText style={this.props.style}>{children}</RootText>
          );
        }}
      </TextContext.Consumer>
    );
  };
}

const styleSheet = StyleSheet.create({
  defaultText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: Colors.text,
  },
});
