'use strict'

const loginElements = require('../Elements/login-elements.json');

let LoginPage = function() {
  
    // Elements
    const email = element(by.id(loginElements.emailTextboxId));
    const password = element(by.id(loginElements.passwordTextboxId));
    const brandName = element(by.xpath(loginElements.brandNameLabelXpath));
    const loginButton = element(by.id(loginElements.loginButtonId));
    const errorMsg = element(by.id('err-invalidAttempt'));

    // To get the title of page
    this.enterEmail =  async function(emailId) {
        try {
            let EC = protractor.ExpectedConditions;
            // Waits for the element with id 'abc' to be visible on the dom.
            await browser.wait(EC.visibilityOf(email), 10000);
            await email.sendKeys(emailId);
            logger.info('Enter email: '+emailId);
        } catch (error) {
            logger.error('Error occurred:' +error);
        }
    };

    // To get the title of page
    this.enterPassword =  async function(emailId) {
        try {
            let EC = protractor.ExpectedConditions;
            // Waits for the element with id 'abc' to be visible on the dom.
            await browser.wait(EC.visibilityOf(password), 10000);
            await password.sendKeys(emailId);
            logger.info('Enter email: '+emailId);
        } catch (error) {
            logger.error('Error occurred:' +error);
        }
    };

    this.clickOnLogin =  async function() {
        try {
            let EC = protractor.ExpectedConditions;
            // Waits for the element with id 'abc' to be visible on the dom.
            await browser.wait(EC.visibilityOf(loginButton), 10000);
            await loginButton.click();
            logger.info('click on login');
        } catch (error) {
            logger.error('Error occurred:' +error);
        }
    };

    this.getErrorText = async function() {
        try {
            let EC = protractor.ExpectedConditions;
            // Waits for the element with id 'abc' to be visible on the dom.
            await browser.wait(EC.visibilityOf(errorMsg), 10000);
            let text = await errorMsg.getText();
            return text;
        } catch (error) {
            logger.error('Error occurred:' +error);
        }
    };
};
module.exports = LoginPage;