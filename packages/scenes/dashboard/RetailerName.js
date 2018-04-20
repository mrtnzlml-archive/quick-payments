// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'mobile-quick-payments-relay';
import Translation from 'mobile-quick-payments-translations';

import type { RetailerName as RetailerNameType } from './__generated__/RetailerName.graphql';

type Props = {|
  data: RetailerNameType,
|};

function RetailerName({ data }: Props) {
  return <Translation passThrough={data.name} />;
}

export default createFragmentContainer(
  RetailerName,
  graphql`
    fragment RetailerName on Retailer {
      name
    }
  `,
);
