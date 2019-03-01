// @flow

import * as React from 'react';
import Translation from '_translations';
import {createFragmentContainer, graphql} from '_relay';
import Decimal from 'decimal.js-light';
import type {Money_data as MoneyType} from '__generated__/Money_data.graphql';

import NullBoundary from './ui/NullBoundary';

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

  const price = Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(Decimal(amount).toNumber());

  return <Translation passThrough={price} />;
};

export default createFragmentContainer(
  ({data}: {|+data: ?MoneyType|}) => {
    if (!data) {
      return <NullBoundary length={3} />;
    }
    return <Price amount={data.amount} currency={data.currency} />;
  },
  {
    data: graphql`
      fragment Money_data on Money {
        amount
        currency
      }
    `,
  },
);
