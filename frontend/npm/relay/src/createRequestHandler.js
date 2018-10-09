// @flow

import Runtime from 'relay-runtime';
import RelayQueryResponseCache from 'relay-runtime/lib/RelayQueryResponseCache';
import {getByStringPath} from '@mrtnzlml/utils';

import {forceFetch, isMutation, isQuery} from './helpers';
import type {CacheConfig, RequestNode, Sink, Uploadables, Variables} from './types.flow';

const burstCache = new RelayQueryResponseCache({
  size: 250,
  ttl: 60 * 1000, // one minute
});

async function execute(
  customFetcher: Function,
  requestNode: RequestNode,
  variables: Variables,
  cacheConfig: CacheConfig,
  uploadables: ?Uploadables,
  sink: Sink,
  complete: boolean = false,
) {
  try {
    const data = await customFetcher(requestNode, variables, uploadables);

    if (data.errors) {
      // What should we do with these partial errors?
      // eslint-disable-next-line no-console
      data.errors.map(error => console.error(error.message, error));
    }

    if (isMutation(requestNode) && data.errors) {
      sink.error(data);

      if (complete) {
        sink.complete();
      }

      throw data;
    }

    sink.next({
      operation: requestNode.operation,
      variables,
      response: data,
    });

    if (complete) {
      sink.complete();
    }

    return {
      operation: requestNode.operation,
      variables,
      response: data,
    };
  } catch (e) {
    sink.error(e);
    return undefined;
  }
}

async function processRequest(
  customFetcher: Function,
  requestNode: RequestNode,
  variables: Variables,
  cacheConfig: CacheConfig,
  uploadables: ?Uploadables,
  sink: Sink,
  complete: boolean = false,
) {
  const queryID = requestNode.text;

  if (isMutation(requestNode)) {
    burstCache.clear();
    return execute(customFetcher, requestNode, variables, cacheConfig, uploadables, sink, complete);
  }

  const fromCache = burstCache.get(queryID, variables);
  if (isQuery(requestNode) && fromCache !== null && !forceFetch(cacheConfig)) {
    sink.next(fromCache);
    if (complete) {
      sink.complete();
    }
    return fromCache;
  }

  const fromServer = await execute(
    customFetcher,
    requestNode,
    variables,
    cacheConfig,
    uploadables,
    sink,
    complete,
  );
  if (fromServer) {
    burstCache.set(queryID, variables, fromServer);
  }

  return fromServer;
}

const getDeferrableVariables = (requests, request, variables: Variables) => {
  const {argumentDependencies} = request;

  if (argumentDependencies.length === 0) {
    return variables;
  }

  return argumentDependencies.reduce((acc, ad) => {
    // Example:
    //
    // "argumentDependencies": [
    //   {
    //     "name": "deferrableID",
    //     "fromRequestName": "dashboardQuery",
    //     "fromRequestPath": "scenes.dashboard.payments[*].StatusIcon_deferrableID",
    //     "ifList": "each",
    //     "ifNull": "skip"
    //   }
    // ]
    const {response} = requests[ad.fromRequestName];

    const variable = getByStringPath(response.data, ad.fromRequestPath);

    // TODO - handle ifList, ifNull
    return {
      ...acc,
      [ad.name]: variable,
    };
  }, {});
};

async function processBatchRequest(
  customFetcher: Function,
  requestNode: RequestNode,
  variables: Variables,
  cacheConfig: CacheConfig,
  uploadables: ?Uploadables,
  sink: Sink,
  complete: boolean = false,
) {
  const requests = {};

  for (const r of requestNode.requests) {
    const v = getDeferrableVariables(requests, r, variables);

    // TODO: we must send multiple queries here
    // https://github.com/facebook/relay/issues/2194#issuecomment-407155883
    requests[r.name] = await processRequest(
      customFetcher,
      r,
      v,
      cacheConfig,
      uploadables,
      sink,
      false,
    );
  }

  sink.complete();
}

module.exports = function createRequestHandler(customFetcher: Function) {
  return function handleRequest(
    requestNode: RequestNode,
    variables: Variables,
    cacheConfig: CacheConfig,
    uploadables: ?Uploadables,
  ) {
    return Runtime.Observable.create(sink => {
      if (requestNode.kind === 'Request') {
        processRequest(customFetcher, requestNode, variables, cacheConfig, uploadables, sink, true);
      }

      if (requestNode.kind === 'BatchRequest') {
        processBatchRequest(customFetcher, requestNode, variables, cacheConfig, uploadables, sink);
      }
    });
  };
};
