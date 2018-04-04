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

    //"QM-5: Sign Up": browser => functions.signUp(browser)

}