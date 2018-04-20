// @flow

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from 'mobile-quick-payments-shared';
import type { TranslationKeys } from 'mobile-quick-payments-translations';

type CommonProps = {|
  testID?: string,
|};

type Props =
  | {|
      id: TranslationKeys,
      ...CommonProps,
    |}
  | {|
      passThrough: ?string | ?number,
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

    if (p.id !== undefined) {
      return (
        <FormattedMessage id={p.id}>
          {translatedText => <Text>{translatedText}</Text>}
        </FormattedMessage>
      );
    }

    // $FlowExpectedError: we do not allow to use 'string' in the 'Text' components but translations are the only exceptions.
    return <Text>{p.passThrough}</Text>;
  };
}
