const loginElements = require('../Elements/login-elements.json');

let email;

module.exports = {
  
    init: () => {
        // Elements
        email = element(by.id(loginElements.emailTextboxId));
    },

    setName: async (name) => {
        await email.sendKeys(name);
        logger.info('this');
    },
};