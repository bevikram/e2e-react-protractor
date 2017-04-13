'use strict';
const input = require('./variables');
// React Web testing

//Clean UI with pie Diagram 
var today = new Date().toISOString()
var date = today.split('T')[0]
var time = today.split('T')[1].slice(0, -1)

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: input.baseUrl,
  capabilities: {
    browserName: 'chrome'
  },
  maxInstances: 50,
  // multiCapabilities: [{
  //   'browserName': 'firefox'
  // }, {
  //   'browserName': 'chrome'
  // }],
  suites: {
    login: ['./specs/login.js'],
    create_customer: ['./specs/createCustomer.js'],
    checkCustCreation: ['./specs/checkCustCreation.js']
  },
  resultJsonOutputFile: './result.json',
  onComplete: function() {
    var browserName,
      browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function(caps) {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');

      var HTMLReport = require('protractor-html-reporter');

      var testConfig = {
        reportTitle: 'NetSense ',
        outputPath: './reports/' + date + '/' + time + '/htmlReports',
        screenshotPath: './reports/htmlReports/screenshots',
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true
      };
      new HTMLReport().from('./reports/' + date + '/' + time + '/xmlResults/' + 'xmlTestResults.xml', testConfig);
    });
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    var width = 1425;
    var height = 1200;
    browser.driver.manage().window().setSize(width, height);
    require('babel-register');
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './reports/' + date + '/' + time + '/xmlResults',
      filePrefix: 'xmlTestResults'
    }));
  },
  getPageTimeout: 50000,
  allScriptsTimeout: 50000,
  mochaOpts: {
    enableTimeouts: false,
  }
};