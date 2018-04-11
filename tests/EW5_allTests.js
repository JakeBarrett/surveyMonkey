const selectors = require('../sources/selectors')
const data = require('../sources/data')
const functions = require('../sources/functions')

module.exports = {
    before:browser => {
        browser.url('https://www.surveymonkey.com')
    },
    after: browser => {
        browser
    },

    'Login': browser => {
        functions.loginFunction(browser, selectors, data.userdata)
    },

    'Crate Survery': browser => {
        functions.createSurvey(browser, data)
    },

    'Add and Deleting Questions': browser => {
        functions.addingDeletingQuestions(browser, data)
    },

    "QM-13 Edit a Question" : browser => functions.editQuestionFunction(browser,selectors.editQuestion,data.editQuestionData),


     'Send Survey': browser => {
        functions.sendSurvey(browser)
     },

     "QM-32 Analyzing Survey Results" : browser => {functions.analyzingDataFunction(browser,selectors,data)},

     'Delete Survey': browser => {functions.deleteSurvey(browser)
     },
}
