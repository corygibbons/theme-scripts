module.exports = {
  preset: "jest-puppeteer",
  setupFiles: ["./jest-setup.js"],
  setupTestFrameworkScriptFile: "expect-puppeteer",
  testPathIgnorePatterns: [".eslintrc.js"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.txt$": "jest-raw-loader"
  }
};
