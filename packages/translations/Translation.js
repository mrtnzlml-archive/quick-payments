// @flow

import * as React from 'react';
import { Text } from 'react-native'; // eslint-disable-line no-restricted-imports
import { FormattedMessage } from 'react-intl';
import { type TranslationKeys } from 'mobile-quick-payments-translations';

type Props =
  | {|
      id: TranslationKeys,
    |}
  | {|
      passThrough: string,
    |};

export default (props: Props) => {
  if (props.id !== undefined && props.passThrough !== undefined) {
    throw new Error(
      "You can use only 'id' or 'passThrough' property in translations but not both.",
    );
  }

  if (props.passThrough !== undefined) {
    return <Text>{props.passThrough}</Text>;
  }

  return (
    <FormattedMessage id={props.id}>
      {translatedText => <Text>{translatedText}</Text>}
    </FormattedMessage>
  );
};
