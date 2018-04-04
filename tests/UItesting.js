const selectors = require('../sources/selectors')
const data = require('../sources/data')
const functions = require('../sources/functions')

module.exports = {
    beforeEach:browser => {
        browser.url('https://www.surveymonkey.com')
    },
    after: browser => {
        browser
    },
    'QM-4 UI testing - as a user I would like to see the main content': browser => {
        browser
            functions.uiTest(browser)
            
    }



}