module.exports = providedConfig => {
  const defaultConfig = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'https://lit-chamber-61567.herokuapp.com',
    specs: ['../specs/*.spec.js'],
    onPrepare: () => {
      browser.waitForAngularEnabled(false)
    },
    jasmineNodeOpts: { random: true }
  }

  return { ...defaultConfig, ...providedConfig }
}
