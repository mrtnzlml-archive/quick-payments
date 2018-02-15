// @flow

import messages, {
  type TranslationKeys as OriginalTranslationKeys,
} from './en-US';

export const getMessages = (language: string) => messages;
export type TranslationKeys = OriginalTranslationKeys;
export { default as Translation } from './Translation';
