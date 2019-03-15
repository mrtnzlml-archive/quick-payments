// @flow

import * as React from 'react';
import Translation from '_translations';

import NullBoundary from './NullBoundary';

const SupportedLocales = {
  // TODO
  en: true,
};

type Props = {|
  +milliseconds: ?string,
  +locale?: $Keys<typeof SupportedLocales>,
|};

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
 */
export default function DateTime({milliseconds, locale = 'en'}: Props) {
  if (milliseconds == null) {
    return <NullBoundary length={5} />;
  }

  const dateTime = Intl.DateTimeFormat(locale, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).format(new Date(Number(milliseconds)));

  return <Translation passThrough={dateTime} />;
}
