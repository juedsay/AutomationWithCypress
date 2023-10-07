const { defineConfig } = require("cypress");



module.exports = defineConfig({
  projectId: 'ks4kxa',
  e2e: {

    "excludeSpecPattern": [
      // "**/1-getting-started.js",
      // "**/2-advanced-exampls/*.js",
      "/cypress/e2e/1-getting-started/*.js",
      "/cypress/e2e/2-advanced-examples/*.js",
    ],

    "viewportWidth":1920,
    "viewportHeight":1080,
    "baseUrl":"https://demoqa.com/",

    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
