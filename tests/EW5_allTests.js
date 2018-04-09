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

    
}