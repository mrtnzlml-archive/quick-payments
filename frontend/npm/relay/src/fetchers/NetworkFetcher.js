// @flow

import fetchWithRetries from '@mrtnzlml/fetch';

import {handleData, getRequestBody, getHeaders} from '../helpers';
import type {RequestNode, Uploadables, Variables} from '../types.flow';

type AdditionalHeaders = Object | Promise<Object>;

module.exports = class NetworkFetcher {
  graphQLServerURL: string;
  additionalHeaders: AdditionalHeaders;

  constructor(graphQLServerURL: string, additionalHeaders: AdditionalHeaders = {}) {
    this.graphQLServerURL = graphQLServerURL;
    this.additionalHeaders = additionalHeaders;
  }

  fetch = async (request: RequestNode, variables: Variables, uploadables: ?Uploadables) => {
    const body = getRequestBody(request, variables, uploadables);

    // sometimes it's necessary to get headers asynchronously (while refreshing authorization
    // token for example) - for this reason we accept object or promise here and we always
    // resolve it as a promise (see tests)
    const additionalHeaders = await Promise.resolve(this.additionalHeaders);
    const headers = {
      ...getHeaders(uploadables),
      ...additionalHeaders,
    };

    const response = await fetchWithRetries(this.graphQLServerURL, {
      method: 'POST',
      headers,
      body,
    });

    return handleData(response);
  };
};
