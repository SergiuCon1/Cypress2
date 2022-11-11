const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "f7ef4y",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
})