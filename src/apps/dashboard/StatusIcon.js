// @flow

import * as React from 'react';
import {createFragmentContainer, graphql} from '_relay';
import Translation from '_translations';
import {Colors} from '_components';
import Text from '_components/typography/Text';
import StyleSheet from '_components/stylesheet';
import type {StatusIcon_data as StatusIconType} from '__generated__/StatusIcon_data.graphql';

type Props = {|
  +data: StatusIconType,
|};

export function StatusIcon({data: {status}}: Props) {
  switch (status) {
    case 'FAILED':
      return (
        <Text style={[styleSheet.text, styleSheet.fail]}>
          <Translation testID="StatusIconFail" passThrough="FAIL" />
        </Text>
      );
    case 'PAID':
      return (
        <Text style={[styleSheet.text, styleSheet.success]}>
          <Translation testID="StatusIconPaid" passThrough="PAID" />
        </Text>
      );
    default:
      return null;
  }
}

const styleSheet = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  },
  fail: {
    color: Colors.red.$700,
  },
  success: {
    color: Colors.green.$700,
  },
});

export default createFragmentContainer(StatusIcon, {
  data: graphql`
    fragment StatusIcon_data on Payment {
      status
    }
  `,
});
