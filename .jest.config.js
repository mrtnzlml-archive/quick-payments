// @flow

module.exports = {
  preset: 'jest-expo',
  rootDir: '',
  setupFilesAfterEnv: ['jest-extended'],
  testMatch: ['**/__tests__/**/*-test*.js'],
  timers: 'fake',
};
