/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  collectCoverage: false,
  collectCoverageFrom: ["rootDir/src/**/*.ts"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  roots: ["<rootDir>/src"],

  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};

export default config;
