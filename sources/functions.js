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


    module.exports = {
        loginLogoutFunction: loginLogoutFunction,
        loginFunction: loginFunction,
        createSurvey: createSurvey,

    }