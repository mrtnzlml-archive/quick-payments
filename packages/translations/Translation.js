// @flow

import * as React from 'react';
import { Text } from 'react-native'; // eslint-disable-line no-restricted-imports
import { FormattedMessage } from 'react-intl';
import { type TranslationKeys } from 'mobile-quick-payments-translations';

type CommonProps = {|
  testID?: string,
|};

type Props =
  | {|
      id: TranslationKeys,
      ...CommonProps,
    |}
  | {|
      passThrough: string,
      ...CommonProps,
    |};

export default class Translation extends React.PureComponent<Props> {
  render = () => {
    const p = this.props;

    if (p.id !== undefined && p.passThrough !== undefined) {
      throw new Error(
        "You can use only 'id' or 'passThrough' property in translations but not both.",
      );
    }

    if (p.passThrough !== undefined) {
      return <Text>{p.passThrough}</Text>;
    }

    return (
      <FormattedMessage id={p.id}>
        {translatedText => <Text>{translatedText}</Text>}
      </FormattedMessage>
    );
  };
}
