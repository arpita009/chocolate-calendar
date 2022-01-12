// jest.config.js
// Sync object

/** @type {import('@jest/types').Config.InitialOptions} */

module.exports = {
  projects: [
    {
      displayName: 'Aivitex Frontend Test',
      setupFiles: ['dotenv/config'],
      testTimeout: 3000,
      testEnvironment: 'jest-environment-jsdom',
      testMatch: ['**/*.test.jsx', '**/*.test.js'],
      setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    },
  ],
};
