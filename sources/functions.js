const selectors = require('./selectors')
const data = require('./data')

let setInputValue = (browser, selector, data) => {
    browser
        .clearValue(selector)
        .setValue(selector, data)
        .verify.value(selector, data)
}

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

//Evan
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

//Evan
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
        .click(selectors.getstarted)
        .waitForElementNotPresent(selectors.getstarted, 5000)
        .click(selectors.mySurveys)
        .waitForElementVisible(selectors.testTitle, 5000)
        .expect.element(selectors.testTitle).text.to.equal("Testing Do Not Delete")
}

//Evan
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
        .click(selectors.questionType)
        .waitForElementVisible(selectors.singleTB, 2000)
        .click(selectors.singleTB)
        .waitForElementVisible(selectors.enterQ, 2000)
        .setValue(selectors.enterQ, data.q1)
        .click(selectors.nextQ)
        .pause(2000)
        .click(selectors.questionType)
        .click(selectors.singleTB)
        .setValue(selectors.enterQ, data.q2)
        .click(selectors.save)
        .waitForElementVisible(selectors.questionTwo, 2000)
        .moveToElement(selectors.questionTwo, undefined, undefined)
        .pause(2000)
        .moveToElement(selectors.deleteQuestion, undefined, undefined)
        .click(selectors.deleteQuestion)
        .pause(3000)
}

//Evan
const sendSurvey = (browser) => {
    browser
        .useXpath()
        .click(selectors.mySurveys)
        .click(selectors.testTitle)
        .click(selectors.collectResponces)
        .click(selectors.xButton)
        .waitForElementVisible(selectors.webLink, 2000)
        .click(selectors.webLink)
        .waitForElementVisible(selectors.copyButton, 2000)
        .click(selectors.copyButton)
        .waitForElementPresent('//div[@class="sm-notification-container"]', 3000)
        .assert.elementPresent('//div[@class="sm-notification-container"]')
}

//Evan
const deleteSurvey = (browser) => {
    browser
        .useXpath()
        .waitForElementVisible(selectors.mySurveys, 2000)
        .click(selectors.mySurveys)
        .waitForElementVisible(selectors.threeDots, 2000)
        .click(selectors.threeDots)
        .click(selectors.deleteSurvey)
        .waitForElementVisible(selectors.redDelete, 2000)
        .assert.containsText(selectors.testDeleteTitle, "Testing Do Not Delete")
        .click(selectors.redDelete)
}

/**
 * Function referencing QM-14 (Signup with valid inputs)
 * @param {object} browser the Nightwatch object
 */
let signUpValid = (browser) => {
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

let signUpInvalid = (browser) => {
    browser
        .click(selectors.signup.homepageSignUpButton)
        .waitForElementVisible(selectors.signup.signUpButton, 5000)
        setInputValue(browser, selectors.signup.usernameInput, "")
        setInputValue(browser, selectors.signup.passwordInput, "")
        setInputValue(browser, selectors.signup.emailInput, "")
        setInputValue(browser, selectors.signup.firstNameInput, "")
        setInputValue(browser, selectors.signup.lastNameInput, "")
    browser.click(selectors.signup.signUpButton)
        .waitForElementVisible(selectors.signup.errorMessage, 5000)
    browser.expect.element(selectors.signup.errorMessage).text.to.contain(data.signUpData.usernameInvalid)
    browser.expect.element(selectors.signup.errorMessage).text.to.contain(data.signUpData.passwordInvalid)
    browser.expect.element(selectors.signup.errorMessage).text.to.contain(data.signUpData.emailInvalid)
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

let editQuestionFunction=(browser,selectors,data)=>{
    browser
    .useXpath()
    .click(selectors.mySurveys)
    .click(selectors.surveyTitle)
    .click(selectors.designSurvey)
    .useCss()
    .click(selectors.getStarted)
    .click(selectors.question1)
    .click(selectors.dropDown)
    .click(selectors.multipleChoice)
    .waitForElementVisible(selectors.tealBox,5000)
    .clearValue(selectors.questionInput)
    .setValue(selectors.questionInput, data.question)
    .useXpath()
    .setValue(selectors.answerInput,data.answer1)
    .setValue(selectors.answerInput,data.answer2)
    .setValue(selectors.answerInput,data.answer3)
    .setValue(selectors.answerInput,data.answer4)
    .useCss()
    .click(selectors.saveButton)
    .verify.containsText(selectors.question1,data.question)
}

let analyzingDataFunction = (browser,selectors,data) => {
    browser
    .back()
    .useXpath()
    .waitForElementVisible(selectors.mySurveysButton,3000)
    .click(selectors.mySurveysButton)
    .click(selectors.analyzeDataSurvey)
    .useCss()
    .waitForElementVisible(selectors.analyzeResultsButton,3000)
    .click(selectors.analyzeResultsButton)
    .waitForElementVisible(selectors.questionsSummaries,3000)
    .verify.elementPresent(selectors.questionsSummaries)
    .verify.elementPresent(selectors.dataTrends)
    .verify.elementPresent(selectors.individualResponses)
    .click(selectors.dataTrends)
    .waitForElementVisible(selectors.dataTrendsPage,3000)
    .verify.elementPresent(selectors.dataTrendsPage)
    .click(selectors.individualResponses)
    .waitForElementVisible(selectors.individualResponsesPage,5000)
    .verify.elementPresent(selectors.individualResponsesPage)
}


    module.exports = {
        loginLogoutFunction: loginLogoutFunction,
        loginFunction: loginFunction,
        createSurvey: createSurvey,
        addingDeletingQuestions: addingDeletingQuestions,
        sendSurvey: sendSurvey,
        deleteSurvey: deleteSurvey,
        signUpValid: signUpValid,
        signUpInvalid: signUpInvalid,
        uiTest: uiTest,
        setInputValue: setInputValue,
        editQuestionFunction:editQuestionFunction,
        //signUp: signUp,
        analyzingDataFunction : analyzingDataFunction,
    }