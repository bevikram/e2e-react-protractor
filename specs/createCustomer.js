'use strict';

import * as input from '../variables';
// import { should, expect, chai } from 'chai';

describe('Create Customer', () => {
  // beforeEach(() => { browser.get("https://nsn-local.sensity.com/app/customerpanel"); });
  it('Should get customer page', () => {
    browser.get(input.baseUrl + "/app/customerpanel");
    // element(by.xpath("//*[@id='sidebar-container']/div/div[1]/div/div/div/div/div/ul/li[1]/a")).click();
    // expect(element(by.css('.icon-fontello-plus-circle')).isPresent()).toBe(false);
    browser.sleep(5000);
    element(by.id('addCustomer')).isPresent();

  // console.log(input.)
  });


  it('Reporter Pass Test0', () => {
    // Intentaionlly failing a Test to check error Reporting.
    expect(true).toEqual(true)

  });

  it('Should pull up customer form', () => {
    element(by.id('addCustomer')).click();
    element(by.id('name')).sendKeys(input.customer.name);
    element(by.id('street1')).sendKeys(input.customer.street1);
    element(by.id('street2')).sendKeys(input.customer.street2);
    element(by.id('city')).sendKeys(input.customer.city);
    element(by.id('state')).sendKeys(input.customer.state);
    element(by.id('postal_code')).sendKeys(input.customer.postal_code);
    element(by.id('country')).sendKeys(input.customer.country);
    element(by.id('contact')).sendKeys(input.customer.contact);
    element(by.id('contact_name')).sendKeys(input.customer.contact_name);
    element(by.id('saveCustomer')).click();
    browser.sleep(2000);
  // element(by.xpath("//button[@type='submit']")).click();
  });


});