const selectors = require('./selectors')
const data = require('./data')
/**
 * Function referencing QM-3 Login and Logout
 * @param {*} browser browser
 * @param {*} selectors selectors
 * @param {*} data data.userdata
 */
let loginFunction = (browser,selectors,data) => {
    browser
    .useXpath()
    .waitForElementVisible(selectors.loginButtonXpath,5000)
    .click(selectors.loginButtonXpath)
    .useCss()
    .waitForElementVisible(selectors.loginMessage,5000)
    .setValue(selectors.usernameInput,data.username)
    .setValue(selectors.passwordInput,data.password)
    .click(selectors.submitButton)
    .waitForElementVisible(selectors.welcomeMessage,5000)
    .verify.containsText(selectors.welcomeMessage,data.welcome)
    .click(selectors.account)
    .click(selectors.signOut)
    .waitForElementVisible(selectors.loginButtonCss, 4000)
}

module.exports = {
    loginFunction : loginFunction

}