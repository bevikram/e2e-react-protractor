'use strict';
var input = require('../variables.js');
// var API = require('../APIs/login.js');

// describe('login with API', function () {
//     it('Sensity user Login API', function () {
//         var api = API;
//         beforeAll(function () {
//             api.login();
//         });
//     });
// });

describe('login screen', function () {
    it('User login as sensity user', function () {
        // open browser
        browser.get("https://nsn-local.sensity.com/");
        browser.sleep(1000);
        element(by.id('emailaddress')).sendKeys(input.username);
        // browser.sleep(1000);
        element(by.id('password')).sendKeys(input.password);
        // browser.sleep(1000);
        element(by.xpath("//button[@type='submit']")).click();
        browser.sleep(2000);
    });
});

describe('Logout application', function () {
    it('User Logout', function () {
        element(by.id('logoutButton')).click();
        browser.sleep(2000);
    });
});