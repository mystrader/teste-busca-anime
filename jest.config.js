const { TestEnvironment } = require('jest-environment-jsdom');

module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['node_modules', 'cypress', 'dist', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!**/*.d.ts', '!**/node_modules/**'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
};
