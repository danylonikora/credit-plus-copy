/** @type {import('@jest/types').Config.InitialOptions} */

module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/src/__mocks__/svg.js",
    "\\.scss$": "<rootDir>/src/__mocks__/empty.js",
  },
};
