// @flow

import path from 'path';
import glob from 'glob';

test('all NPM package.json files', done => {
  expect.hasAssertions();

  glob(path.join(__dirname, '..', './**/package.json'), (error, filenames) => {
    expect(error).toBeNull();
    expect(filenames).toHaveLength(6);

    filenames.forEach(filename => {
      // $FlowIssue: https://github.com/facebook/flow/issues/2692
      const packageJson = require(filename);
      expect(packageJson.private).toBe(true);
      expect(packageJson.name).toStartWith('_');
      expect(packageJson.version).toBe('0.0.0');
      expect(packageJson.main).toBeString();
    });

    done();
  });
});
