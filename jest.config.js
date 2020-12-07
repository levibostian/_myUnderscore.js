module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  preset: "ts-jest",
  reporters: ["default", "jest-junit"],
  transformIgnorePatterns: ["/node_modules/"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "_.test.ts", "_mock"],
  resetMocks: true,
  coverageDirectory: "./coverage/",
  collectCoverage: true
}
