// @flow

import * as React from 'react';
import {View} from 'react-native';
import {SplitScreen, Icon, Colors, StyleSheet, Money} from '_shared';
import {createFragmentContainer, graphql} from '_relay';

const Rejection = ({data}) => (
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
        <Money data={data.total} />
      </View>
    }
  />
);

const styleSheet = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default createFragmentContainer(
  Rejection,
  graphql`
    fragment Rejection on Payment {
      total {
        ...Money
      }
    }
  `,
);
