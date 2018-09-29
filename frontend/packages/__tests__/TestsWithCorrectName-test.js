// @flow

import glob from 'glob';

test('every test should follow the filename conventions', done => {
  expect.hasAssertions();

  glob('./packages/**/__tests__/**.js', (error, filenames) => {
    expect(filenames.length > 10).toBe(true);

    filenames.forEach(filename => {
      if (!/.*-test.*\.js$/.test(filename)) {
        expect(filename).toBe('to end with "-test.js"');
      }
    });

    done();
  });
});
