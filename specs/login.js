'use strict';
import { loginInfo } from '../variables';
import log from '../pom/log'
var loginUrl;

describe('login screen', () => {
    it('User login as sensity user', () => {
        // open browser
        browser.get('/app/login');
        loginUrl = browser.getCurrentUrl();
        // browser.get(input.baseUrl);
        browser.sleep(1000);
        log.in(loginInfo)
        // browser.sleep(1000);
        element(by.xpath("//button[@type='submit']")).click();
        browser.sleep(3000);
    });
});