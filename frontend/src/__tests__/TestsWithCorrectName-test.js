// @flow

import path from 'path';
import glob from 'glob';

test('every test should follow the filename conventions', done => {
  expect.hasAssertions();

  glob(path.join(__dirname, '..', './**/__tests__/**.js'), (error, filenames) => {
    // just to be sure we actually found some files
    expect(filenames.length > 20).toBe(true);

    filenames.forEach(filename => {
      if (!/.*-test.*\.js$/.test(filename)) {
        expect(filename).toBe('to end with "-test.js"');
      }
    });

    done();
  });
});
