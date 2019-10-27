const {defaults} = require('jest-config');

module.exports = {
    "transform": {
        "^.+\\.ts$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx|jsx)?$",
    "moduleFileExtensions": [...defaults.moduleFileExtensions, 'ts', 'js', 'tsx', 'jsx']
}