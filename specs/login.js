'use strict';
import * as input from '../variables';

describe('login screen', () => {
    it('User login as sensity user', () => {
        // open browser
        browser.get("https://nsn-local.sensity.com/");
        // browser.sleep(1000);
        element(by.id('emailaddress')).sendKeys(input.username);
        // browser.sleep(1000);
        element(by.id('password')).sendKeys(input.password);
        // browser.sleep(1000);
        element(by.xpath("//button[@type='submit']")).click();
        browser.sleep(1000);
    });
});