'use strict'

const loginElements = require('../Elements/login-elements.json');

let LoginPage = function() {
  
    // Elements
    const email = element(by.id(loginElements.emailTextboxId));
    const password = element(by.id(loginElements.passwordTextboxId));
    const brandName = element(by.xpath(loginElements.brandNameLabelXpath));
    const loginButton = element(by.id(loginElements.loginButtonId));
    const errorMsg = element(by.id(loginElements.loginErrorId));
    const emailTextInProfileDropdown = element(by.xpath(loginElements.profileDropdownXpath));
    const logoutLink = element(by.xpath(loginElements.logoutXpath));
    const profileDropdown = element(by.id(loginElements.profileDropdownId));

    // To get the title of page
    this.enterEmail =  async (emailId) => {
        try {
            let EC = protractor.ExpectedConditions;
            // Waits for the element with id 'abc' to be visible on the dom.
            await browser.wait(EC.visibilityOf(email), 10000, 'waiting for email textbox');
            await email.sendKeys(emailId);
            logger.info('Enter email: '+emailId);
        } catch (error) {
            logger.error('Error occurred:' +error);
        }
    };

    // To get the title of page
    this.enterPassword =  async (emailId) => {
        try {
            let EC = protractor.ExpectedConditions;
            // Waits for the element with id 'abc' to be visible on the dom.
            await browser.wait(EC.visibilityOf(password), 10000, 'waiting for password textbox');
            await password.sendKeys(emailId);
            logger.info('Enter email: '+emailId);
        } catch (error) {
            logger.error('Error occurred:' +error);
        }
    };

    this.clickOnLogin =  async () => {
        try {
            let EC = protractor.ExpectedConditions;
            // Waits for the element with id 'abc' to be visible on the dom.
            await browser.wait(EC.visibilityOf(loginButton), 10000, 'waiting for login button');
            await loginButton.click();
            logger.info('click on login');
        } catch (error) {
            logger.error('Error occurred:' +error);
        }
    };

    this.getErrorText = async () => {
        try {
            let EC = protractor.ExpectedConditions;
            // Waits for the element with id 'abc' to be visible on the dom.
            await browser.wait(EC.visibilityOf(errorMsg), 10000, 'waiting for error message');
            let text = await errorMsg.getText();
            logger.info('Error message text is: '+text);
            return text;
        } catch (error) {
            logger.error('Error occurred:' +error);
        }
    };

    this.getProfileText = async () => {
        try {
            let EC = protractor.ExpectedConditions;
            // Waits for the element with id 'abc' to be visible on the dom.
            await browser.wait(EC.visibilityOf(emailTextInProfileDropdown), 10000, 'waiting for email text in profile dropdown');
            let text = await emailTextInProfileDropdown.getText();
            logger.info('Email id text in dropdown is: '+text);
            return text;
        } catch (error) {
            logger.error('Error occurred:' +error);
        }
    };

    this.clickOnProfileDropdown =  async () => {
        try {
            let EC = protractor.ExpectedConditions;
            // Waits for the element with id 'abc' to be visible on the dom.
            await browser.wait(EC.visibilityOf(profileDropdown), 10000, 'waiting for profile dropdown');
            await profileDropdown.click();
            logger.info('click on profile dropdown');
        } catch (error) {
            logger.error('Error occurred:' +error);
        }
    };

    this.clickOnLogout =  async () => {
        try {
            let EC = protractor.ExpectedConditions;
            // Waits for the element with id 'abc' to be visible on the dom.
            await browser.wait(EC.visibilityOf(profileDropdown), 10000, 'waiting for logout button');
            await logoutLink.click();
            logger.info('click on logout');
        } catch (error) {
            logger.error('Error occurred:' +error);
        }
    };

    this.getLoginTitleText = async () => {
        try {
            let EC = protractor.ExpectedConditions;
            // Waits for the element with id 'abc' to be visible on the dom.
            await browser.wait(EC.visibilityOf(loginButton), 10000, 'waiting for login button');
            let text = await browser.getTitle();
            logger.info('Title of Login page is: '+text);
            return text;
        } catch (error) {
            logger.error('Error occurred:' +error);
        }
    };
};
module.exports = LoginPage;