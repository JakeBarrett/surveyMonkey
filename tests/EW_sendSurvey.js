const selectors = require('../sources/selectors')
const data = require('../sources/data')
const functions = require('../sources/functions')

module.exports = {
    beforEach:browser => {
        browser.url('https://www.surveymonkey.com')
    },
    after: browser => {
        browser
    },

//     'QM-33 Sending Survey': browser => {
//         browser
//             functions.loginFunction(browser, selectors, data)
//             functions.sendSurvey(browser)
//     },
}