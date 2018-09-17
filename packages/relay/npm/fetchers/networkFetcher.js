// @flow

import type {UploadableMap, Variables} from 'react-relay';
import type {RequestNode} from 'relay-runtime';

import fetchWithRetries from '../fetch/fetchWithRetries';
import {handleData, getRequestBody, getHeaders} from '../helpers';

// return user auth token
const getToken = () => {
  return undefined;
  // localStorage.getItem('authToken');
};

const ENV = ((process.env: any): {
  GRAPHQL_URL: string,
  [key: string]: ?string,
});

ENV.GRAPHQL_URL = 'http://127.0.0.1:3000';

module.exports = async (
  request: RequestNode,
  variables: Variables,
  uploadables: ?UploadableMap,
) => {
  const body = getRequestBody(request, variables, uploadables);

  const headers = {
    ...getHeaders(uploadables),
    authorization: getToken(),
  };

  const response = await fetchWithRetries(ENV.GRAPHQL_URL, {
    method: 'POST',
    headers,
    body,
  });

  return handleData(response);
};
