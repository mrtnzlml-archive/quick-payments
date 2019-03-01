// @flow

import * as React from 'react';
import Translation from '_translations';
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
    return (
      <QueryRendererError
        onTryAgain={retry}
        title={
          error instanceof FetchTimeoutError ? (
            <Translation id="General.QueryRenderer.TimeoutError.Title" />
          ) : (
            <Translation id="General.QueryRenderer.Error.Title" />
          )
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
