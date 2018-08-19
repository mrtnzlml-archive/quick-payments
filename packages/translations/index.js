// @flow

import * as React from 'react';
import {Text} from '_shared';
import {
  IntlProvider as ReactIntlProvider,
  addLocaleData as ReactIntlAddLocaleData,
} from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

import enVocabulary, {
  type TranslationKeys as OriginalTranslationKeys,
  type TranslationKeysObject as OriginalTranslationKeysObject,
} from './vocabularies/en';

const SupportedLanguages = {
  en: true,
  es: true,
};

export type SupportedLanguagesType = $Keys<typeof SupportedLanguages>;

export const isLanguageSupported = (language: string) => {
  return SupportedLanguages[language] === true;
};

/**
 * Returns all messages for given language.
 */
export const getMessages = (language: SupportedLanguagesType): TranslationKeysObject => {
  // Metro Bundler currently doesn't support dynamic requires
  switch (language) {
    case 'en':
      return enVocabulary;
    case 'es':
      return require('./vocabularies/es.js').default;
    default:
      throw new Error(`Couldn't load language '${language}'.`);
  }
};

/**
 * All available translation keys in the application.
 */
export type TranslationKeys = OriginalTranslationKeys;
export type TranslationKeysObject = OriginalTranslationKeysObject;

/**
 * Component returns translated string including components necessary
 * for translation formatting.
 */
export {default} from './Translation';

export const IntlProvider = (props: {|
  children: React.Node,
  locale: SupportedLanguagesType,
  messages: TranslationKeysObject,
|}) => {
  ReactIntlAddLocaleData([...en, ...es]);
  return <ReactIntlProvider textComponent={Text} {...props} />;
};
