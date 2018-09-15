// @flow

import {getByPath} from '_fbjs';
import type {CacheConfig, UploadableMap, Variables} from 'react-relay';
import type {RequestNode} from 'relay-runtime';

import type {ExecutePayload, Sink} from './executeFunction';
import cacheHandler from './cacheHandler';

export function get(data: Object, path: string) {
  const pathChunks = path.replace(/\[\*]/, '.*').split('.');
  return getByPath(data, pathChunks);
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

    const variable = get(response.data, ad.fromRequestPath);

    // TODO - handle ifList, ifNull
    return {
      ...acc,
      [ad.name]: variable,
    };
  }, {});
};

const batchRequestQuery = async (
  request: RequestNode,
  variables: Variables,
  cacheConfig: CacheConfig,
  uploadables: ?UploadableMap,
  sink: Sink<ExecutePayload>,
) => {
  const requests = {};

  for (const r of request.requests) {
    const v = getDeferrableVariables(requests, r, variables);

    // TODO: we must send multiple queries here
    // https://github.com/facebook/relay/issues/2194#issuecomment-407155883
    const response = await cacheHandler(r, v, cacheConfig, uploadables, sink, false);

    requests[r.name] = response;
  }

  sink.complete();
  throw new Error('Batch request queries are currently not supported.');
};

export default batchRequestQuery;
