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

//EW
let loginFunction = (browser, selectors, data) => {
    browser
    .useXpath()
    .waitForElementVisible(selectors.loginButtonXpath,5000)
    .click(selectors.loginButtonXpath)
    .useCss()
    .waitForElementVisible(selectors.loginMessage,5000)
    .setValue(selectors.usernameInput, data.username)
    .setValue(selectors.passwordInput, data.password)
    .click(selectors.submitButton)
    
}

//EW
const createSurvey = (browser, data) => {
    browser
        .click(selectors.createSurvey)
        .click(selectors.scratch)
        .setValue(selectors.surveyName, data.surveyTitle)
        .useXpath()
        .waitForElementPresent(selectors.createButton, 2000)
        .click(selectors.createButton)
        .useCss()
        .waitForElementNotPresent(selectors.scratch, 2000)
        .useXpath()
        .waitForElementVisible(selectors.getstarted, 2000)
        .click(selectors.getStarted)
        .waitForElementNotPresent(selectors.getstarted, 5000)
        .click(selectors.mySurveys)
        .waitForElementVisible(selectors.testTitle, 8000)
        .pause(5000)
        .expect.element(selectors.testTitle).text.to.equal("Testing Do Not Delete")
}

//EW 
const addingDeletingQuestions = (browser, data) => {
    browser
        .useXpath()
        .waitForElementVisible(selectors.mS, 2000)
        .pause(1000)
        .click(selectors.mS)
        .click(selectors.testTitle)
        .useXpath()
        .waitForElementVisible(selectors.addQ, 2000)
        .click(selectors.addQ)
        .click(selectors.getstarted)
        .click(selectors.questoinType)
        .click(selectors.singleTB)
        .waitForElementVisible(selectors.enterQ, 2000)
        .setValue(selectors.enterQ, data.q1)
        .click(selectors.nextQ)
        .click(selectors.questoinType)
        // .click(selectors.singleTB)
        // .waitForElementVisible(selectors.enterQ, 2000)
        // .setValue(selectors.enterQ, data.q2)

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
        addingDeletingQuestions: addingDeletingQuestions,
        
        signUp: signUp,
    }