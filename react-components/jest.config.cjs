module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__tests__/__mocks__/styleMock.js',
    '\\.(css|less)$': '<rootDir>/__tests__/__mocks__/styleMock.js',
  },
  testMatch: ['**/__tests__/**.[tj]s?(x)'],
  testEnvironment: 'jsdom',
  resetMocks: false,
  setupFiles: ['jest-localstorage-mock', './setupTests.ts'],
  setupFilesAfterEnv: ['./jest.setup.js'],
};
