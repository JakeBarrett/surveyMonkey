const selectors = require('./selectors')
const data = require('./data')

let setInputValue = (browser, selector, data) => {
    browser
        .clearValue(selector)
        .setValue(selector, data)
        .verify.value(selector, data)
}

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

let signUp = (browser) => {
    browser
        .click(selectors.signup.homepageSignUpButton)
        .waitForElementVisible(selectors.signup.signUpPageTitle, 2000)
        .setInputValue(browser, selectors.signup.usernameInput, data.signUpData.username)
        .setInputValue(browser, selectors.signup.passwordInput, data.signUpData.password)
        .setInputValue(browser, selectors.signup.emailInput, data.signUpData.email)
        .setInputValue(browser, selectors.signup.firstNameInput, data.signUpData.firstName)
        .setInputValue(browser, selectors.signup.lastNameInput, data.signUpData.lastName)
        .click(selectors.signup.signUpButton)
}

module.exports = {
    loginFunction : loginFunction,
    signUp: signUp
}