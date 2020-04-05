const { Given, When, Then, And, setDefaultTimeout } = require('cucumber');
const expect = require('chai').expect;
const env = require('../environment.js');
const LoginPage = require('../Pages/login-page.js');

setDefaultTimeout(60 * 1000);

let loginPage = new LoginPage();
let pageTitle;

Given('A user navigates to the application login page', async () => {
    await browser.driver.get(env.baseUrl + env.envPath);
});

When(/^user enters (.*) and (.*)/, async (email, password) => {
    await loginPage.enterEmail(email);
    await loginPage.enterPassword(password);
});

When(/^user clicks on the Login button/, async () => {
    await loginPage.clickOnLogin();
});

Then(/^A validation (.*) should display on page/, async (expectedMessage) => {
    await expect(await loginPage.getErrorText()).to.be.equal(expectedMessage);
});