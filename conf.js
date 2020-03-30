var failFast = require('protractor-fail-fast');

exports.ROOT = 'https://192.168.1.12:43827';
//exports.ROOT = 'https://192.168.2.1';

exports.config = {
  directConnect: true,
  plugins: process.env.NO_FAILFAST ? [] : [failFast.init()],

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    acceptInsecureCerts: true,
    'browserName': 'chrome',
    chromeOptions: {
      binary: '/usr/bin/google-chrome',
      args: [ '--headless', '--no-sandbox' ],
    },
  },

  // Framework to use. Jasmine 2 is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  //specs: ['login.js', 'isolate.js'],
  specs: ['login.js'].concat(
    process.env.GARGOYLE_ACTION ? [`${process.env.GARGOYLE_ACTION}.js`] : []
  ),

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare: function(){ //configure junit xml report
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.TerminalReporter({
      verbosity: 3,
    }));
    var screenshotReporter = require('protractor-jasmine2-screenshot-reporter');
    jasmine.getEnv().addReporter(new screenshotReporter({
      dest: 'screenshots',
      filename: 'my-report.html'
    }));
  },
};
