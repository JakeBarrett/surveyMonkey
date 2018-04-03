const selectors = require('../sources/selectors')
const userData = require('../sources/userData')
const functions = require('../sources/functions')

module.exports = {
    beforEach:browser => {
        browser.url('https://www.surveymonkey.com')
    },
    after: browser => {
        browser
    },
    'QM-2 Creating Survey': browser => {
        browser
            functions.loginFunction(browser, selectors, userData.userdata)
            functions.createSurvey(browser, userData)
            
    }

}