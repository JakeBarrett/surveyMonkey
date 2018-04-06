const selectors = require('../sources/selectors')
const functions = require('../sources/functions')
const data = require('../sources/data')

module.exports = {

    before : browser => {
        browser.url('https://www.surveymonkey.com')
    },

    after: browser => {
       browser.end()
   },

"QM-3: Login & Logout" : browser => functions.loginFunction(browser,selectors,data.userdata),
 /*   
"QM-13 Edit a Question" : browser => functions.editQuestionFunction(browser,selectors.editQuestion,data.editQuestionData),
*/

"QM-32 Analyzing Survey Results" : browser => {
    browser
    .useXpath()
    .click(selectors.mySurveys)
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

    .pause(5000)




}


    }
