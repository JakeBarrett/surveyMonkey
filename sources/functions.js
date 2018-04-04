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

let uiTest = (browser) => {
    browser
        .assert.title(data.titlepage)
        .assert.urlContains(data.url)
        .waitForElementPresent('body', 1000)
        .assert.visible('body')

    browser
        .verify.elementPresent(selectors.logo)
        .assert.visible(selectors.logo)
        .verify.containsText(selectors.logo, data.logo)
        .waitForElementPresent(selectors.navbar, 1000)
        .verify.elementPresent(selectors.navbar)
        .assert.visible(selectors.navbar)
        .waitForElementPresent(selectors.carousel, 1000)
        .verify.elementPresent(selectors.carousel)
        .assert.elementPresent(selectors.carousel)
        .waitForElementPresent(selectors.carouHead, 1000)
        .verify.elementPresent(selectors.carouHead)
        .assert.elementPresent(selectors.carouHead)
        .verify.containsText(selectors.carouHead, data.carouHead)
        .waitForElementPresent(selectors.iPhone1st, 1000)
        .verify.elementPresent(selectors.iPhone1st)
        .assert.elementPresent(selectors.iPhone1st)
        .waitForElementPresent(selectors.iPhone2nd, 1000)
        .verify.elementPresent(selectors.iPhone2nd)
        .assert.elementPresent(selectors.iPhone2nd)
        .waitForElementPresent(selectors.iPhone3rd, 1000)
        .verify.elementPresent(selectors.iPhone3rd)
        .assert.elementPresent(selectors.iPhone3rd)
        
        .end()
}


    module.exports = {
        loginLogoutFunction: loginLogoutFunction,
        loginFunction: loginFunction,
        createSurvey: createSurvey,
        uiTest: uiTest

    }