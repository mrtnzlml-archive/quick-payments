// @flow

import * as React from 'react';
import {
  QueryRenderer as RelayQueryRenderer,
  FetchTimeoutError,
} from '@kiwicom/relay';

import Environment from './Environment';
import QueryRendererError from './QueryRendererError';
import QueryRendererLoading from './QueryRendererLoading';

type Props = {|
  +query: $FlowFixMe,
  +render: (readyState: $FlowFixMe) => React$Node,
  +variables?: Object,
|};

export default function QueryRenderer(props: Props) {
  // TODO: logging service

  function handleLoading() {
    return <QueryRendererLoading />;
  }

  function handleSystemError({error, retry}) {
    if (__DEV__) {
      console.error(error);
    }
    return (
      <QueryRendererError
        onTryAgain={retry}
        title={
          error instanceof FetchTimeoutError
            ? 'Server is unreachable'
            : 'Unable to load data'
        }
      />
    );
  }

  return (
    <RelayQueryRenderer
      environment={Environment}
      query={props.query}
      variables={props.variables}
      onLoading={handleLoading}
      onSystemError={handleSystemError}
      onResponse={props.render}
    />
  );
}
