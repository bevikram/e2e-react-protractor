'use strict';

// React Web testing
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'https://nsn-local.sensity.com/',
  capabilities: {
      browserName:'chrome'
  },
  // multiCapabilities: [{
  //   'browserName': 'firefox'
  // }, {
  //   'browserName': 'chrome'
  // }],
  frameworks: ['mocha', 'chai'],
  specs: ['./specs/login.js'],
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    var width = 1425;
    var height = 1200;
    browser.driver.manage().window().setSize(width, height);
    require('babel-register');
  },
  allScriptsTimeout: 15000,
  mochaOpts: {
    enableTimeouts: false,
  }
};