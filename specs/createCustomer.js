'use strict';

import input from '../variables';
import FillForm from '../pom/FillForm';
// import { should, expect, chai } from 'chai';
// var until = protractor.ExpectedConditions;

describe('Create Customer', () => {

  var searchByName = element(by.xpath("//*[@id='Customer-grid']/div[3]/div[1]/div[1]/input"));
  var selectedFirstRow = $(".grid-canvas .slick-row .slick-cell");
  var popUp = $('.noty_text');
  // beforeEach(() => { browser.get("https://nsn-local.sensity.com/app/customerpanel"); });
  it('Should get customer page', () => {
    //browser.get(input.baseUrl + "/app/customerpanel");
    browser.sleep(3000);
    element(by.id('addCustomer')).click();
    FillForm.fill(input.customer)
    element(by.id('addCustomer')).isDisplayed()
  });


  it('Should pull up customer form', () => {
    
    // browser.wait(until.visibilityOf($("#addCustomer")));
    
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