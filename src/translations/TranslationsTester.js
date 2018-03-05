// @flow

import type { TranslationKeys } from './index';

const first = text => text.slice(0, 1);
const last = text => text.slice(-1);
const isUpperCase = character => character === character.toUpperCase();
const isLowerCase = character => character === character.toLowerCase();

export const run = (
  originalVocabulary: { [TranslationKeys]: string },
  translatedVocabularies: $ReadOnlyArray<{ [TranslationKeys]: string }>,
  failFn?: (mixed, string) => boolean,
) => {
  // default failIf implementation (console.warn)
  let failIf = (test, failMessage) => {
    if (test) {
      console.warn(failMessage);
      return true;
    }
    return false;
  };

  if (failFn !== undefined) {
    failIf = failFn;
  }

  translatedVocabularies.forEach((translatedVocabulary, index) => {
    Object.keys(originalVocabulary).forEach(originalKey => {
      const original = originalVocabulary[originalKey];
      const translated = translatedVocabulary[originalKey];

      // all keys from original vocabulary must exist even in all the translations
      let failed = failIf(
        translated === undefined,
        `Key '${originalKey}' doesn't exist in vocabulary '${index}'.`,
      );
      if (failed) {
        return;
      }

      // first uppercase letter must stay uppercase even after translation
      failIf(
        isUpperCase(first(original)) && !isUpperCase(first(translated)),
        `Key '${originalKey}' from vocabulary '${
          index
        }' should start with uppercase character but it starts with lowercase '${first(
          translated,
        )}'.`,
      );

      // first lowercase letter must stay lowercase even after translation
      failIf(
        isLowerCase(first(original)) && !isLowerCase(first(translated)),
        `Key '${originalKey}' from vocabulary '${
          index
        }' should start with lowercase character but it starts with uppercase '${first(
          translated,
        )}'.`,
      );

      // translation should end with the same punctuation (.!?)
      failIf(
        last(original).match(/^[.!?]/) && last(original) !== last(translated),
        `Key '${originalKey}' from vocabulary '${
          index
        }' should end with '${last(original)}' but it ends with '${last(
          translated,
        )}' character.`,
      );

      // translation should contain the same amount of special variables as the original
      const regexp = /\$[^ ]+/g;
      const originalVariables = original.match(regexp);
      const translatedVariables = translated.match(regexp);
      failIf(
        originalVariables && !translatedVariables,
        "Translated string should contain special variable but it doesn't.",
      );
      if (originalVariables != null && translatedVariables != null) {
        failIf(
          originalVariables.length !== translatedVariables.length,
          `Translated string should contain '${
            originalVariables.length
          }' special variables but it contains '${
            translatedVariables.length
          }' variables.`,
        );
      }

      // translation should not contain the same value as original
      failIf(
        original === translated,
        `Key '${originalKey}' is not translated in vocabulary '${
          index
        }' (the values are same).`,
      );
    });

    // translated vocabularies should not contain additional translation keys
    Object.keys(translatedVocabulary).forEach(vocabularyKey => {
      failIf(
        originalVocabulary[vocabularyKey] === undefined,
        `Key '${
          vocabularyKey
        }' in vocabulary 'TODO' is redundant and should be removed.`,
      );
    });
  });
};
