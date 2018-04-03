const selectors = require('./selectors')
const data = require('./data')


let loginLogoutFunction = (browser,selectors,data) => {
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


let loginFunction = (browser, selectors, data) => {
    browser
    .useXpath()
    .waitForElementVisible(selectors.loginButtonXpath,5000)
    .click(selectors.loginButtonXpath)
    .useCss()
    .waitForElementVisible(selectors.loginMessage,5000)
    .setValue(selectors.usernameInput,data.username)
    .setValue(selectors.passwordInput,data.password)
    .click(selectors.submitButton)
    
}

const createSurvey = (browser, data) => {
    browser
        .click(selectors.createSurvey)
        .click(selectors.scratch)
        .setValue(selectors.surveyName, data.surveyTitle)
        .useXpath()
        .waitForElementPresent(selectors.createButton, 2000)
        .useXpath()
        .click(selectors.createButton)
        .pause(2000)
        .click(selectors.getStarted)
        .click(selectors.mySurveys)
        .expect.element(selectors.testTitle).text.to.equal("This is a test")

}

/**
 * Function referencing QM-5 (Signup)
 * @param {object} browser the Nightwatch object
 */
let signUp = (browser) => {
    browser
        .click(selectors.signup.homepageSignUpButton)
        .waitForElementVisible(selectors.signup.signUpPageTitle, 2000)
        setInputValue(browser, selectors.signup.usernameInput, data.signUpData.username)
        setInputValue(browser, selectors.signup.passwordInput, data.signUpData.password)
        setInputValue(browser, selectors.signup.emailInput, data.signUpData.email)
        setInputValue(browser, selectors.signup.firstNameInput, data.signUpData.firstName)
        setInputValue(browser, selectors.signup.lastNameInput, data.signUpData.lastName)
    browser.click(selectors.signup.signUpButton)
        .waitForElementVisible(selectors.signup.welcomeText, 5000)
}


    module.exports = {
        loginLogoutFunction: loginLogoutFunction,
        loginFunction: loginFunction,
        createSurvey: createSurvey,
        signUp: signUp,
    }