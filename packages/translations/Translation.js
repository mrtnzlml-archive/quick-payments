// @flow

import * as React from 'react';
import {FormattedMessage} from 'react-intl';
import {Text} from '_shared';
import type {TranslationKeys} from '_translations';
import {invariant} from '_fbjs';

type CommonProps = {|
  +testID?: string,
|};

type Props =
  | {|
      +id: TranslationKeys,
      ...CommonProps,
    |}
  | {|
      +passThrough: any, // must be compatible with Text children type!
      ...CommonProps,
    |};

export default class Translation extends React.PureComponent<Props> {
  render = () => {
    const p = this.props;

    // id XOR passThrough
    invariant(
      (p.id !== undefined && p.passThrough === undefined) ||
        (p.id === undefined && p.passThrough !== undefined),
      "You have to use 'id' or 'passThrough' property in translations.",
    );

    if (p.id !== undefined) {
      return (
        <FormattedMessage id={p.id}>
          {translatedText => <Text>{translatedText}</Text>}
        </FormattedMessage>
      );
    }

    return <Text>{p.passThrough}</Text>;
  };
}
