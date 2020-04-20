const { Given, When, Then, setDefaultTimeout } = require('cucumber');
const expect = require('chai').expect;
const env = require('../environment.js');
const LoginPage = require('../Pages/login-page.js');

setDefaultTimeout(60 * 1000);

let loginPage = new LoginPage();

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

Then(/^user with (.*) should redirect to the dashboard page/, async (emailText) => {
    await expect(await loginPage.getProfileText()).to.be.equal(emailText);
});

When(/^user clicks on the profile dropdown/, async () => {
    await loginPage.clickOnProfileDropdown();
});

When(/^user clicks on logout/, async () => {
    await loginPage.clickOnLogout();
});

Then('user should redirect to the {string} page', async (string) => {
    await expect(await loginPage.getLoginTitleText()).to.be.equal(string);
});
