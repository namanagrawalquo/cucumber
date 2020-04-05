const { Given, When, Then, Before, setDefaultTimeout } = require('cucumber');
const expect = require('chai').expect;
const env = require('../environment.js');
const LoginPage = require('../Pages/login-page.js');

setDefaultTimeout(60 * 1000);

let loginPage = new LoginPage();
let pageTitle;

Given('Launch the browser', async () => {
    await browser.driver.get(env.baseUrl + env.envPath);
});

When('Get the page title', async () => {
    pageTitle = await browser.driver.getTitle();
    await expect(pageTitle).to.be.equal('Login');
});

Then('Verify the page title', async () => {
    await loginPage.enterEmail('naman@gmail.com');
    await loginPage.enterPassword('nanama');
    await loginPage.clickOnLogin();
    await expect(await loginPage.getErrorText()).to.be.equal('sdasd');
});