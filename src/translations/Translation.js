// @flow

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { type TranslationKeys } from 'mobile-quick-payments-translations';

type Props = {|
  id: TranslationKeys,
|};

export default ({ id }: Props) => <FormattedMessage id={id} />;
