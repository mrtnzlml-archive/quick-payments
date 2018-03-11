// @flow

import { run } from '../TranslationsTester';

let sink = [];
const failFn = (testFn, message) => {
  if (testFn) {
    sink.push(message);
    return true;
  }
  return false;
};

beforeEach(() => {
  sink = [];
});

const mainTranslation = {
  KEY_DOES_NOT_EXIST: 'xxx',
  FIRST_UPPERCASE: 'Translate me.',
  FIRST_LOWERCASE: 'translate me!',
  PUNCTUATION: 'Translate me!',
  VARIABLE: 'This is $PRODUCT_NAME.',
  VARIABLES: 'This is $PRODUCT_NAME with $PRODUCT_FEATURE.',
  NOT_TRANSLATED: 'This is still the same.',
};

const vocabularies = [
  {
    FIRST_UPPERCASE: 'translate me.', // first character should be uppercase
    FIRST_LOWERCASE: 'Translate me!', // first character should be lowercase
    PUNCTUATION: 'Translate me.', // should end with "!"
    VARIABLE: 'This is PRODUCT_NAME.', // doesn't contain special variable
    VARIABLES: 'This is $PRODUCT_NAME with nothing.', // should contain two variables
    NOT_TRANSLATED: 'This is still the same.',
  },
];

it('works', () => {
  // $FlowExpectedError: this test intentionally doesn't use valid translation keys
  run(mainTranslation, vocabularies, failFn);
  expect(sink).toMatchSnapshot();
});
