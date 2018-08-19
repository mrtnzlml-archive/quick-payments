// @flow

import Expo from 'expo';
import {isLanguageSupported, type SupportedLanguagesType} from 'quick-payments-translations';

export default {
  getCurrentLocaleAsync: async (): Promise<SupportedLanguagesType> => {
    // this hopefully returns always language tags
    // https://www.w3.org/International/articles/language-tags/
    const currentLocale = await Expo.DangerZone.Localization.getCurrentLocaleAsync();
    const language = currentLocale.match(/^[^-]+/g);

    if (language !== null && isLanguageSupported(language[0])) {
      return language[0];
    } else {
      return 'en'; // unable to resolve the language = fallback to EN
    }
  },
};
