module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    ".+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  "setupFilesAfterEnv": [
    "<rootDir>/src/enzyme.config.cjs",
  ]
};