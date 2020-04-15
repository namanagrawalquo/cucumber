const env = require('./environment.js');
const log4js = require('log4js');
const directoryFiles = require('./Jsons/directory.json');
const fs = require('fs');

// Delete the previously generated log files if exists
if (fs.existsSync(directoryFiles.logDirectory)) {
  // fs.unlinkSync is for delete a file
  fs.unlinkSync(directoryFiles.logAccessFile);
  fs.unlinkSync(directoryFiles.logAppFile);
  fs.unlinkSync(directoryFiles.logErrorFile);
} else {
  fs.mkdirSync(directoryFiles.logDirectory);
}

exports.config = {

  /*
  To run the test cases in IE set the followings:
      directConnect: false,
      seleniumAddress: env.seleniumAddress,
  */

  directConnect: true, // Using direct connect, no need to start selenium.
  
  // set to "custom" instead of cucumber.
  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // capabilities that needs to be used to 
  capabilities: env.capabilities,

  // Protractor waits until there are no pending asynchronous tasks in your Angular application
  allScriptsTimeout: 50000,

  SELENIUM_PROMISE_MANAGER: false,

  // require feature files
  specs: [
    './Features/login.feature' // accepts a glob
  ],

  cucumberOpts: {
    // require step definitions
    require: [
      './supports/take-screenshot.js',
      './Definitions/login-steps.js' // accepts a glob,
    ],
    tags: '@smoke or @regression',
    // Tell CucumberJS to save the JSON report
    format: 'json:e2e/results.json',
    strict: true
  },

  // Here the magic happens
  plugins: [{
    package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
    options:{
      // read the options part
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true,
      pageTitle: 'Cucumber Test Run',
      disableLog: true,
      displayDuration: true,
      reportName: "Start4 Cucumber Test Run",
      customData: {
        title: 'Run Information',
        data: [
            {label: 'Project', value: 'Custom project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST'}
        ]
      },
      jsonOutputPath: 'e2e/json-output',
      reportPath: 'e2e/Reports',
      removeOriginalJsonReportFile: true
    }
  }],

  beforeLaunch: function() {
    log4js.configure({
        appenders: {
          access: {
              type: 'dateFile', filename: directoryFiles.logAccessFile,
                pattern: '-yyyy-MM-dd'},
          app: {
              type: 'file', filename: directoryFiles.logAppFile,
                maxLogSize: 10485760, numBackups: 3},
          errorFile: {
              type: 'file', filename: directoryFiles.logErrorFile},
          errors: {
              type: 'logLevelFilter', level: 'error',
                appender: 'errorFile'},
        },
        categories: {
          default: {
              appenders: ['app', 'errors'], level: 'info'},
          http: {
              appenders: ['access'], level: 'info'},
        },
    });
  },

  onPrepare: async () => {

    await browser.waitForAngularEnabled(false);
    // maximize the browser window
    browser.driver.manage().window().maximize();

    logger = log4js.getLogger('Cucumber');
    // log levels can be 
    // ALL, trace, debug, info, warn, error, fatal
    logger.level = 'all';
  }
};