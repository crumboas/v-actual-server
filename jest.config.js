module.exports = {
  setupFiles: ['./jest.setup.js'],
  testPathIgnorePatterns: ['dist', '/node_modules/', '/build/'],
  roots: ['<rootDir>'],
  testMatch: ['<rootDir>/**/*.spec.js'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,ts,tsx}'],
  coveragePathIgnorePatterns: ['dist', '/node_modules/', '/build/', '/nordigen-node/'],
  coverageReporters: ['html', 'lcov', 'text', 'text-summary'],
  resetMocks: true,
  restoreMocks: true
};
