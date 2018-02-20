// @flow

import * as React from 'react';
import { injectIntl as originalInjectIntl } from 'react-intl';

import messages, {
  type TranslationKeys as OriginalTranslationKeys,
} from './en-US';

/**
 * Returns all messages for given language.
 */
export const getMessages = (language: string) => messages;

/**
 * All available translation keys in the application.
 */
export type TranslationKeys = OriginalTranslationKeys;

/**
 * Component returns translated string including components necessary
 * for translation formatting.
 */
export { default as Translation } from './Translation';

// see: https://github.com/yahoo/react-intl/wiki/API
type MessageDescriptor = {|
  id: string,
  defaultMessage?: string,
  description?: string | Object,
|};

type IntlConfig = {|
  locale: string,
  formats: Object,
  messages: { [id: string]: string },
  defaultLocale: string,
  defaultFormats: Object,
|};

type IntlFormat = {|
  formatDate: (value: any, options?: Object) => string,
  formatTime: (value: any, options?: Object) => string,
  formatRelative: (value: any, options?: Object) => string,
  formatNumber: (value: any, options?: Object) => string,
  formatPlural: (value: any, options?: Object) => string,
  formatMessage: (
    messageDescriptor: MessageDescriptor,
    values?: Object,
  ) => string,
  formatHTMLMessage: (
    messageDescriptor: MessageDescriptor,
    values?: Object,
  ) => string,
|};

export type IntlShape = IntlConfig & IntlFormat & {| now: () => number |};

// see: https://flow.org/en/docs/react/hoc/
export const InjectIntl = <Props: {}>(
  Component: React.ComponentType<Props>,
): React.ComponentType<$Diff<Props, { intl: IntlShape | void }>> => {
  return originalInjectIntl(Component);
};
