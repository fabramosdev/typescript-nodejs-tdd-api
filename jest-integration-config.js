// eslint-disable-next-line @typescript-eslint/no-require-imports
const config = require('./jest.config.ts')
config.testMatch = ['**/*.test.ts']
module.exports = config