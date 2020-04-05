// Common configuration files with defaults plus overrides from environment vars
module.exports = {
  /* The address of a running selenium server.
    Selenium server needs to start first and uncomment
    Line 6 to 7 are required to run test in IE */
//   seleniumAddress:
//   (process.env.SELENIUM_URL || 'http://localhost:4444/wd/hub'),
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    // To run in IE uncomment line 11 to 12 and comment line 13 to 30
    // 'browserName': 'internet explorer',
    // 'ignoreProtectedModeSettings': true,
    'browserName':
      (process.env.TEST_BROWSER_NAME || 'firefox'),
    'version':
      (process.env.TEST_BROWSER_VERSION || 'ANY'),
    'chromeOptions': {
      'args': [
          // '--disable-infobars', -- Chrome 76 removed this flag.
          '--start-maximized',
      ],
      'prefs': {
          // disable chrome's annoying password manager
          'profile.password_manager_enabled': false,
          'credentials_enable_service': false,
          'password_manager_enabled': false,
      },
      'excludeSwitches': ['enable-automation'],
      'useAutomationExtension': false,
    },
    'moz:firefoxOptions': {
      // gecko driver pref will put here
    }
  },

  // A base URL for your application under test.
  baseUrl:
    'https://start4.quovantis.com/',
  envPath:
    'precached'
};
