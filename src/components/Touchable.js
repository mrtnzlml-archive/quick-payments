// @flow

import * as React from 'react';
// eslint-disable-next-line no-restricted-imports
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

import type {StylePropType} from '.';

type Props = {|
  +children: React.Node,
  +onPress: () => void,
  +style?: StylePropType,
  +pressColor?: string,
  +accessibilityRole?: 'none' | 'button',

  // FIXME: should be "React.Element<typeof Translation>" because for example every button works
  // with the translations in title and accessibility label should be translated as well. But how?
  +accessibilityLabel?: string,
|};

const ANDROID_VERSION_LOLLIPOP = 21;

export default class Touchable extends React.Component<Props> {
  static defaultProps = {
    accessibilityRole: 'button',
    pressColor: 'rgba(0, 0, 0, .32)',
  };

  render = () => {
    // necessary only because of TouchableNativeFeedback
    const children = React.Children.only(this.props.children);

    /*
     * TouchableNativeFeedback.Ripple causes a crash on old Android versions,
     * therefore only enable it on Android Lollipop and above.
     *
     * All touchables on Android should have the ripple effect according to
     * platform design guidelines.
     * We need to pass the background prop to specify a borderless ripple effect.
     */
    if (
      Platform.OS === 'android' &&
      Platform.Version >= ANDROID_VERSION_LOLLIPOP
    ) {
      const {accessibilityRole, style, ...rest} = this.props;
      return (
        <TouchableNativeFeedback
          useForeground={TouchableNativeFeedback.canUseNativeForeground()}
          accessibilityTraits={accessibilityRole} // TODO: replace with accessibilityRole (RN 57)
          accessibilityComponentType={accessibilityRole} // TODO: replace with accessibilityRole (RN 57)
          {...rest}
          style={null}
          background={TouchableNativeFeedback.Ripple(
            this.props.pressColor,
            false,
          )}
        >
          <View style={style}>{children}</View>
        </TouchableNativeFeedback>
      );
    }

    return <TouchableOpacity {...this.props}>{children}</TouchableOpacity>;
  };
}
