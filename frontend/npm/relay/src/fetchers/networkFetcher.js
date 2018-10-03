// @flow

import fetchWithRetries from '@mrtnzlml/fetch';
import type {UploadableMap, Variables} from 'react-relay';
import type {RequestNode} from 'relay-runtime';

import {handleData, getRequestBody, getHeaders} from '../helpers';

// return user auth token
const getToken = () => {
  return undefined;
  // localStorage.getItem('authToken');
};

module.exports = function(graphQLServerURL: string) {
  return async (request: RequestNode, variables: Variables, uploadables: ?UploadableMap) => {
    const body = getRequestBody(request, variables, uploadables);

    const headers = {
      ...getHeaders(uploadables),
      authorization: getToken(),
    };

    const response = await fetchWithRetries(graphQLServerURL, {
      method: 'POST',
      headers,
      body,
    });

    return handleData(response);
  };
};
