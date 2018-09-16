// @flow

import http from 'http';

import {executeQuery} from './index';

const hostname = '127.0.0.1';
const port = 3000;

// Please note: this is only very naive implementation for testing purposes.
const server = http.createServer((request, response) => {
  if (request.method === 'POST') {
    let body = '';
    request.on('data', chunk => {
      body += chunk.toString(); // convert Buffer to string
    });
    request.on('end', async () => {
      const {query, variables, operationName} = JSON.parse(body);
      const result = await executeQuery(query, variables, operationName);

      response.statusCode = 200;
      response.setHeader('Content-Type', 'application/json');

      // yup, this server is slow on purpose
      setTimeout(() => {
        response.end(JSON.stringify(result));
      }, 2000);
    });
  } else {
    throw new Error('Only POST requests are supported.');
  }
});

server.listen(port, hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://${hostname}:${port}/`);
});
