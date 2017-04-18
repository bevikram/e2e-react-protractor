
module.exports = {
    fill: function(customerInfo) {
        console.log('===>>>customerInfo',customerInfo)
        element(by.id('name')).sendKeys(customerInfo.name);
        element(by.id('street1')).sendKeys(customerInfo.street1);
        element(by.id('street2')).sendKeys(customerInfo.street2);
        element(by.id('city')).sendKeys(customerInfo.city);
        element(by.id('state')).sendKeys(customerInfo.state);
        element(by.id('postal_code')).sendKeys(customerInfo.postal_code);
        element(by.id('country')).sendKeys(customerInfo.country);
        element(by.id('contact')).sendKeys(customerInfo.contact);
        element(by.id('contact_name')).sendKeys(customerInfo.contact_name);
    }
};
