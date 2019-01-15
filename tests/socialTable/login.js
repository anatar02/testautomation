var utils = require('../../pages/utils');

module.exports = {
  '@tags': ['login'],
  before: function (browser) {
    utils(browser).navigateTo();
  },
  'Go to the login page': function (browser) {
    utils(browser).setLogin('ashok.natar@gmail.com','adsadmin1-2');
    utils(browser).createNewEvent();

  },
  after: function (browser) {
    browser.pause(5000);
    browser.end();
  }
};

