const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/__mocks__/svg.js",
    "\\.scss$": "<rootDir>/__mocks__/empty.js",
  },
};

module.exports = createJestConfig(customJestConfig);
