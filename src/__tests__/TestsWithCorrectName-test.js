// @flow

import path from 'path';
import glob from 'glob';
import fs from 'fs';

test('every test should follow the filename conventions', done => {
  expect.hasAssertions();

  glob(
    path.join(__dirname, '..', './**/__tests__/**.js'),
    (error, filenames) => {
      // just to be sure we actually found some files
      expect(filenames.length > 10).toBe(true);

      filenames.forEach(filename => {
        fs.readFile(filename, (err, data) => {
          if (err) {
            throw err;
          }

          if (data.indexOf('expect(') >= 0) {
            // so it's probably a test file
            if (!/.*-test.*\.js$/.test(filename)) {
              expect(filename).toBe(filename.replace(/\.js$/, '-test.js'));
            }
          }
        });
      });

      done();
    },
  );
});
