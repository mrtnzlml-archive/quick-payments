// @flow

import * as React from 'react';
import Translation from '_translations';
import {createFragmentContainer, graphql} from '_relay';
import Decimal from 'decimal.js-light';

import type {Money as MoneyType} from './__generated__/Money.graphql';

const SupportedLocales = {
  // TODO
  en: true,
};

type Props = {|
  +amount: ?string,
  +currency: ?string, // TODO: SupportedCurrencies (?)
  +locale?: $Keys<typeof SupportedLocales>,
|};

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
 */
export const Price = ({amount, currency, locale = 'en'}: Props) => {
  if (amount == null || currency == null) {
    return null;
  }

  // $FlowIssue: https://github.com/facebook/flow/issues/2801
  const price = Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(Decimal(amount).toNumber());

  return <Translation passThrough={price} />;
};

export default createFragmentContainer(
  ({data}: {|+data: MoneyType|}) => <Price amount={data.amount} currency={data.currency} />,
  graphql`
    fragment Money on Money {
      amount
      currency
    }
  `,
);
