const selectors = require('../sources/selectors')
const functions = require('../sources/functions')
const data = require('../sources/data')

module.exports = {

    beforeEach: browser => {
        browser.url('https://www.surveymonkey.com')
    },

    after: browser => {
        browser.end()
    },

    //"QM-14: Sign Up (valid inputs)": browser => functions.signUpValid(browser),
    "QM-18: Sign Up (invalid inputs)": browser => functions.signUpInvalid(browser),
}