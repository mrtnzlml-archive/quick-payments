// @flow

import {introspectionQuery, buildClientSchema, printSchema} from 'graphql';
import fs from 'fs';
import path from 'path';

import {executeQuery} from '../index';

const serializer = {
  print(val, serialize, indent) {
    return val;
  },

  test(val) {
    return true;
  },
};

it('works', async done => {
  expect.addSnapshotSerializer(serializer);
  expect.assertions(2);

  const introspectionResult = await executeQuery(introspectionQuery);
  const schema = buildClientSchema(introspectionResult.data);
  const readableSchema = printSchema(schema);

  expect(readableSchema).toMatchSnapshot();

  fs.writeFile(path.join(__dirname, '/../../schema.graphql'), readableSchema, 'utf8', err => {
    expect(err).toBeNull();
    done();
  });
});
