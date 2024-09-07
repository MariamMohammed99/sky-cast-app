const jestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  reporters: ['default'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  setupFiles: ['./jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }],
  },
  
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['/node_modules'],
  coveragePathIgnorePatterns: ['/node_modules'],
  coverageDirectory: 'coverage/jest',
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
  coverageReporters: ['text', 'html', 'json'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};

module.exports = jestConfig;

