// @flow

import fetchWithRetries from '@mrtnzlml/fetch';

import {handleData, getRequestBody, getHeaders} from '../helpers';
import type {RequestNode, Uploadables, Variables} from '../types.flow';

module.exports = class NetworkFetcher {
  graphQLServerURL: string;
  additionalHeaders: Object;

  constructor(graphQLServerURL: string, additionalHeaders: Object = {}) {
    this.graphQLServerURL = graphQLServerURL;
    this.additionalHeaders = additionalHeaders;
  }

  fetch = async (request: RequestNode, variables: Variables, uploadables: ?Uploadables) => {
    const body = getRequestBody(request, variables, uploadables);

    const headers = {
      ...getHeaders(uploadables),
      ...this.additionalHeaders,
    };

    const response = await fetchWithRetries(this.graphQLServerURL, {
      method: 'POST',
      headers,
      body,
    });

    return handleData(response);
  };
};
