export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.ts",
    "!dist/**",
    "!lib/**",
    "!**/node_modules/**",
  ],
  coverageDirectory: "./coverage/",
  globals: {
    "ts-jest": {
      diagnostics: false,
    }
  },
  moduleFileExtensions: ["js", "ts"],
  reporters: ["default", "github-actions"],
  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
  testRunner: "jest-circus/runner",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  verbose: true,
};

// This will strip :: commands from the log output during test runs

const processStdoutWrite = process.stdout.write.bind(process.stdout);

process.stdout.write = (str, encoding, cb) => {
  if (!str.match(/^::/)) {
    return processStdoutWrite(str, encoding, cb);
  }
};
