module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/pages/_*.{js,jsx}',
    '!**/node_modules/**',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js', 'jest-axe/extend-expect'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '~/components/(.+)': '<rootDir>/src/components/$1',
    '\\.svg$': '<rootDir>/jest.svg.js',
  },
  modulePaths: ['<rootDir>/src'],
  moduleDirectories: ['.', 'src', 'node_modules'],
};
