const path = require('path');
const globalJestConfig = require('../jest.config');

const finalJestConfig = globalJestConfig;

finalJestConfig.rootDir = path.join(__dirname, '../');
finalJestConfig.testMatch = ['/**/*ImageStoryshots.ts'];

module.exports = finalJestConfig;
