const configCreator = require('./configCreator')

module.exports.config = configCreator({
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless']
    },
    shardTestFiles: true,
    maxInstances: 2
  }
})
