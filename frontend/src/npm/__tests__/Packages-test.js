// @flow

import path from 'path';
import glob from 'glob';

test('all NPM package.json files', done => {
  expect.hasAssertions();

  glob(path.join(__dirname, '..', './**/package.json'), (error, filenames) => {
    expect(error).toBe(null);
    expect(filenames).toHaveLength(3);

    filenames.forEach(filename => {
      // $FlowIssue: https://github.com/facebook/flow/issues/2692
      const packageJson = require(filename);
      expect(packageJson.private).toBe(false);
      expect(packageJson.name).toStartWith('@mrtnzlml/');
      expect(packageJson.version).toBeString();
      expect(packageJson.main).toBeString();
      expect(packageJson.homepage).toStartWith(
        'https://github.com/mrtnzlml/quick-payments/tree/master/frontend/src/npm/',
      );
    });

    done();
  });
});
