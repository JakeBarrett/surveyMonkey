const selectors = require('..//selectors')
const functions = require('..//functions')
const data = require('..//data')

module.exports = {

    beforeEach: browser => {
        browser.url('https://www.surveymonkey.com')
    },

    after: browser => {
        browser.end()
    },

    "QM-5: Sign Up": browser => functions.signUp(browser)

}