// @flow

import * as React from 'react';
import {createFragmentContainer, graphql} from '_relay';
import {Price as SharedPrice} from '_shared';

import type {PaymentPrice as PaymentPriceType} from './__generated__/PaymentPrice.graphql';

type Props = {|
  +data: PaymentPriceType,
|};

export function PaymentPrice({data: {amount, currency}}: Props) {
  return <SharedPrice amount={amount} currency={currency} />;
}

export default createFragmentContainer(
  PaymentPrice,
  graphql`
    fragment PaymentPrice on Payment {
      amount
      currency
    }
  `,
);
