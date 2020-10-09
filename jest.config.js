module.exports = {
  verbose: true,
  transform: {
    "^.+\\.js$": "./node_modules/babel-jest",
    "^.+\\.vue$": "vue-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  moduleFileExtensions: ["js", "vue"],
  moduleDirectories: ["<rootDir>/node_modules", "<rootDir>/src/js"],
};
