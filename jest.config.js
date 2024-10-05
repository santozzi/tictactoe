module.exports = {
  clearMocks: true,
  reporters: ['default', [ "jest-junit", {
      suiteName: "jest tests",
      outputName: "test-results.xml"
    }]
  ],
  setupFilesAfterEnv: ['regenerator-runtime/runtime'],
  testPathIgnorePatterns: [
    "/node_modules/",
  ]
};
