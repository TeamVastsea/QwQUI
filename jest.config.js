module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['packages/components/**/*.{ts,tsx}'],
  moduleFileExtensions: ['tsx', 'ts', 'js', 'jsx'],
  modulePathIgnorePatterns: ['packages/build', 'packages/tools'],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic'
            }
          }
        }
      }
    ],
  },
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
    "@qwqui/tools": "<rootDir>/packages/tools"
  },
  setupFilesAfterEnv: ['./setup.ts', "@testing-library/jest-dom"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  }
}