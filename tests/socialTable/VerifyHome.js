
module.exports = {
    tags: ['testcase2'],
    'Verify the valid user is able to login ' : function (browser) {
        browser
          .url('https://signup.socialtables.com')
          .waitForElementVisible('body', 1000)
          //Using id
          .setValue('input[type=email]', 'ashok@gmail.com')
          .setValue('#field-email', "ashok@gmail.com")
           //Using id
          .setValue('#field-password', "adsadmin1-2")
          // we're back to CSS now
          .useCss() 
          .click('div[class*=sign-in__button]')

          .pause(2000);  
        browser.assert.title('Social Tables')
        browser.assert.urlContains('https://signup.socialtables.com/');
        browser.saveScreenshot('./screenshots/testcase2.jpg');
        browser.end();
      },

      'Verify Register User ' : function (browser) {
        browser
          .url('https://signup.socialtables.com')
          .waitForElementVisible('body', 1000)
        
          // we're back to CSS now
          .useXpath()     // every selector now must be XPath
            .click("//a[text()='Join Now']")
            
          
        browser.end();
      }

     
}