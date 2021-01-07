const configCreator = require('./configCreator')

module.exports.config = configCreator({
  capabilities: {
    browserName: 'firefox',
    'moz:firefoxOptions': {
      args: ['--headless']
    },
    shardTestFiles: true,
    maxInstances: 5
  }
})
