const selectors = require('..//selectors')
const functions = require('..//functions')
const data = require('..//data')

module.exports = {

    beforeEach : browser => {
        browser.url('https://www.surveymonkey.com')
    },

        after: browser => {

        browser.end()
        },

"QM-3: Login & Logout" : browser => functions.loginFunction(browser,selectors,data.userdata)
        

    }
