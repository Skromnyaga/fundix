const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // base settings
    baseUrl: "https://fundix.pro",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", 
    supportFile: "cypress/support/e2e.js", 
    
    // desktop
    viewportWidth: 1280,
    viewportHeight: 720,    
    
    retries: {
      runMode: 2,  // for CI run
      openMode: 0  
    },
    
    // default browser
    browser: "chrome",
    
    //custom events
    setupNodeEvents(on, config) {
      
      // custom listener for errors
      on('after:screenshot', (details) => {
        console.log('Screenshot from Fundix test:', details.path);
      });
      
      // return config
      return config;
    },
    
    // additional options
    video: false,  // record video of autotests
    screenshotOnRunFailure: true,  // take a screenshot when tests if failed
    watchForFileChanges: false,  // auto-re-run after changes
  },

});
