// @flow

import {executeQuery} from '_api';
import type {RequestNode} from 'relay-runtime';
import type {UploadableMap, Variables} from 'react-relay';

module.exports = (request: RequestNode, variables: Variables, uploadables: ?UploadableMap) => {
  return executeQuery(request.text, variables, request.name);
};
