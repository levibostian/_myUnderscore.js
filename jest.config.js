module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  preset: "ts-jest",
  reporters: ["default", "jest-junit"],
  transformIgnorePatterns: ["/node_modules/"],
  testEnvironment: "node",
  // roots: ["src/"],
  testPathIgnorePatterns: ["/node_modules/", "_.test.ts", "_mock"],
  resetMocks: true,
  // setupFilesAfterEnv: ["./src/_.test.ts"],
  coverageDirectory: "./coverage/",
  collectCoverage: true
}
