// @flow

import * as React from 'react';
import Translation from 'quick-payments-translations';

const SupportedLocales = {
  // TODO
  en: true,
};

type Props = {|
  // TODO:
  // Amount should be integer (smallest currency unit) so for example
  // cents for EUR (100 cents = 1 EUR) or 100 for ¥100 (zero-decimal currency).
  +amount: ?number,
  +currency: ?string, // TODO: SupportedCurrencies (?)
  +locale?: $Keys<typeof SupportedLocales>,
|};

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
 */
export default ({amount, currency, locale = 'en'}: Props) => {
  if (amount == null || currency == null) {
    return null;
  }

  // $FlowIssue: https://github.com/facebook/flow/issues/2801
  const price = Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);

  return <Translation passThrough={price} />;
};
