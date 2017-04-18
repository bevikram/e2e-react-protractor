'use strict';

import * as input from '../variables';
// import { should, expect, chai } from 'chai';
// var until = protractor.ExpectedConditions;

describe('Create Customer', () => {

  var searchByName = element(by.xpath("//*[@id='Customer-grid']/div[3]/div[1]/div[1]/input"));
  var selectedFirstRow = $(".grid-canvas .slick-row .slick-cell");
  var popUp = $('.noty_text');
  // beforeEach(() => { browser.get("https://nsn-local.sensity.com/app/customerpanel"); });
  it('Should get customer page', () => {
    browser.get(input.baseUrl + "/app/customerpanel");
    browser.sleep(3000);

    element(by.id('addCustomer')).isDisplayed()
  });


  it('Should pull up customer form', () => {
    
    // browser.wait(until.visibilityOf($("#addCustomer")));
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
    element(by.id('saveCustomer')).click().then(() => {
      popUp.isPresent();
    })
    // element(by.xpath("//button[@type='submit']")).click();
  });

  it('should access slickgrid', () => {
    popUp.getText().then(function (text) {
      console.log(text);
    });
  })

  it('should search grid for added customer', () => {
    searchByName.isPresent().then(() => {
      searchByName.sendKeys(input.customer.name);
    });
    browser.sleep(3000);
    expect(selectedFirstRow.getText()).toEqual(input.customer.name);
    browser.sleep(3000);
  });

});