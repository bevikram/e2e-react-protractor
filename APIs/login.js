var https = require('https');
// var protractor = require('protractor');
import {loginInfo} from '../variables';

var api = function () {
  this.login = function () {
    var defferred = protractor.promise.defer();
    var config = {
      hostname: loginInfo.hostname,
      path: '/login',
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        "email": loginInfo.username,
        "password": loginInfo.password
      }
    };

    var callback = function () {
      deferred.fulfill();
    };

    var req = http.request(config, callback);
    req.end();

    return deferred.promise;
  }
};
