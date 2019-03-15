// @flow

import * as React from 'react';
import {View} from 'react-native';
import {SplitScreen, Icon, Colors, Money} from '_components';
import StyleSheet from '_components/stylesheet';
import {createFragmentContainer, graphql} from '_relay';
import type {Confirmation_data as ConfirmationDataType} from '__generated__/Confirmation_data.graphql';

type Props = {|
  +data: ?ConfirmationDataType,
|};

/**
 * TODO: this page must be animated to avoid scam with static screenshots
 * TODO: show date and time
 * TODO: it should be grey on return from homepage (?) - to prevent scams with just opening older
 */
const Confirmation = ({data}: Props) => {
  const total = data?.total;
  return (
    <SplitScreen
      childrenTop={
        <View style={styleSheet.container}>
          <Icon name="check" color={Colors.white} size={300} />
        </View>
      }
      childrenBottom={
        <View>
          <Money data={total} />
        </View>
      }
    />
  );
};

const styleSheet = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default createFragmentContainer(Confirmation, {
  data: graphql`
    fragment Confirmation_data on Payment {
      total {
        ...Money_data
      }
    }
  `,
});
