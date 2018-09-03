// @flow

import type {CacheConfig, UploadableMap, Variables} from 'react-relay';
import type {RequestNode} from 'relay-runtime';

import type {ExecutePayload, Sink} from './executeFunction';
import cacheHandler from './cacheHandler';

function get(data: Object, path: string) {
  // TODO: implement
  // path example: "scenes.dashboard.payments[*].StatusIcon_deferrableID"
  throw new Error('Batch request queries are currently not supported.');
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

    const response = await cacheHandler(r, v, cacheConfig, uploadables, sink, false);

    requests[r.name] = response;
  }

  sink.complete();
};

export default batchRequestQuery;
