// @flow

import * as React from 'react';
import { View } from 'react-native';

import StyleSheet from '../ui/PlatformStyleSheet';

type Props = {|
  +children: $ReadOnlyArray<React.Element<any>>,
  +onValidationCheck: boolean => void
|};

type State = {|
  // { [child-index]: is-valid }
  children: { [number]: boolean }
|};

/**
 * `FormGroup` silently expects that all form elements are in a column.
 */
export default class FormGroup extends React.Component<Props, State> {
  state = {
    children: {}
  };

  /**
   * Registers all children to be validated. Child with `omitValidation`
   * property is considered to be valid by default (buttons; not required).
   */
  componentDidMount = () => {
    const childrenToBeValidated = {};
    this.props.children.map((child, index) => {
      // `true` means child is valid
      childrenToBeValidated[index] = child.props.omitValidation;
    });
    this.setState({
      children: childrenToBeValidated
    });
  };

  isFormGroupValid = (): boolean =>
    !!Object.values(this.state.children).reduce(
      (accumulator, currentValue) => accumulator && Boolean(currentValue),
      true
    );

  render = () => {
    const children = this.props.children;
    const isLast = index => index === children.length - 1;

    return children.map((child, index) => {
      let validatedChild = child;

      if (React.isValidElement(child)) {
        validatedChild = React.cloneElement(child, {
          onValidation: isValid =>
            this.setState(
              prevState => {
                prevState.children[index] = isValid;
                return prevState;
              },
              () => this.props.onValidationCheck(this.isFormGroupValid())
            )
        });
      }

      return (
        <View key={index} style={isLast(index) ? undefined : styleSheet.row}>
          {validatedChild}
        </View>
      );
    });
  };
}

const styleSheet = StyleSheet.create({
  row: {
    marginBottom: 10
  }
});
