module.exports = {
    in: function(loginInfo) {
        element(by.id('emailaddress')).sendKeys(loginInfo.username);
        element(by.id('password')).sendKeys(loginInfo.password);
        element(by.xpath("//button[@type='submit']")).click();
    },
    out: function() {
        element(by.id('logoutButton')).click();

    }
};