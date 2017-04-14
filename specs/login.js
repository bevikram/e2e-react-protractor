'use strict';
import * as input from '../variables';
var loginUrl;

describe('login screen', () => {
    it('User login as sensity user', () => {
        // open browser
        browser.get('/app/login');
        loginUrl = browser.getCurrentUrl();
        // browser.get(input.baseUrl);
        // browser.sleep(1000);
        element(by.id('emailaddress')).sendKeys(input.username);
        // browser.sleep(1000);
        element(by.id('password')).sendKeys(input.password);
        // browser.sleep(1000);
        element(by.xpath("//button[@type='submit']")).click();
        browser.sleep(1000);
    });

    it('Reporter Fail Test1', () => {
        // Intentaionlly failing a Test to check error Reporting.
        expect(true).toEqual(false)

    });
    it('Reporter Pass Test1', () => {
        // Intentaionlly failing a Test to check error Reporting.
        expect(true).toEqual(true)

    });
    it('Reporter Pass Test1', () => {
        // Intentaionlly failing a Test to check error Reporting.
        expect(true).toEqual(true)

    });
    it('Reporter Fail Test2', () => {
        // Intentaionlly failing a Test to check error Reporting.
        expect(true).toEqual(false)

    });

});