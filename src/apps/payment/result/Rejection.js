// @flow

import * as React from 'react';
import {View} from 'react-native';
import Colors from '_components/Colors';
import Money from '_components/Money';
import Icon from '_components/Icon';
import SplitScreen from '_components/layout/SplitScreen';
import StyleSheet from '_components/stylesheet';
import {createFragmentContainer, graphql} from '_relay';
import type {Rejection_data as RejectionDataType} from '__generated__/Rejection_data.graphql';

type Props = {|
  +data: ?RejectionDataType,
|};

const Rejection = ({data}: Props) => {
  const total = data?.total;
  return (
    <SplitScreen
      backgroundColor={Colors.error}
      childrenTop={
        <View style={styleSheet.container}>
          <Icon name="clear" color={Colors.white} size={300} />
        </View>
      }
      childrenBottom={
        <View>
          {/* TODO: show the error and explanation */}
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

export default createFragmentContainer(Rejection, {
  data: graphql`
    fragment Rejection_data on Payment {
      total {
        ...Money_data
      }
    }
  `,
});
