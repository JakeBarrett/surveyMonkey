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

    'QM-7 Deleting Survey': browser =>{
        functions.loginFunction(browser, selectors, data.userdata)
        functions.deleteSurvey(browser)
    },
}