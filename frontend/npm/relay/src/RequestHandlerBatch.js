// @flow

import type {Variables, UploadableMap, CacheConfig} from 'react-relay';
import type {RequestNode} from 'relay-runtime';
import {getByStringPath} from '_utils';

import type {ExecutePayload, Sink} from './helpers';

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

/**
 * Handles `BatchRequest` kind of requests.
 *
 * PLEASE NOTE: it doesn't support deferred lists at this moment (TODO).
 */
export default class RequestHandlerBatch {
  requestHandler: Object; // TODO

  constructor(requestHandler: Object) {
    this.requestHandler = requestHandler;
  }

  handle = async (
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
      requests[r.name] = await this.requestHandler.handle(
        r,
        v,
        cacheConfig,
        uploadables,
        sink,
        false,
      );
    }

    sink.complete();
  };
}
