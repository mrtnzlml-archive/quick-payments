// @flow

import {getByStringPath} from '@mrtnzlml/utils';

import type {RequestNode, CacheConfig, Uploadables, Variables, Sink} from './types.flow';

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
module.exports = class RequestHandlerBatch {
  requestHandler: Object; // TODO

  constructor(requestHandler: Object) {
    this.requestHandler = requestHandler;
  }

  handle = async (
    requestNode: RequestNode,
    variables: Variables,
    cacheConfig: CacheConfig,
    uploadables: ?Uploadables,
    sink: Sink,
  ) => {
    const requests = {};

    for (const r of requestNode.requests) {
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
};
