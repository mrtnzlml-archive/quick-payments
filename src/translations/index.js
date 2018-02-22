// @flow

import * as React from 'react';

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
