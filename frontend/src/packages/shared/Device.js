// @flow

import * as Expo from 'expo';
import {isLanguageSupported, type SupportedLanguagesType} from '_translations';

export function _normalizeLocale(locale: string): SupportedLanguagesType {
  const language = locale.match(/^[^-]+/g);

  if (language !== null && isLanguageSupported(language[0])) {
    // $FlowExpectedError: cannot determine the value here properly (supported language)
    return language[0];
  }

  return 'en'; // unable to resolve the language = fallback to EN
}

export default {
  getCurrentLocaleAsync: (): SupportedLanguagesType => {
    // this hopefully returns always language tags
    // https://www.w3.org/International/articles/language-tags/
    return _normalizeLocale(Expo.Localization.locale);
  },
};
