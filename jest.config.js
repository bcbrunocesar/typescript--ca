module.exports = {
  clearMocks: true,
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'js'],
  moduleNameMapper: {
    '@entity': '<rootDir>/src/core/entity/index.ts',
  },
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.+(ts|js)'],
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
};
