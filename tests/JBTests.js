const selectors = require('../sources/selectors')
const functions = require('../sources/functions')
const data = require('../sources/data')

module.exports = {

    before : browser => {
        browser.url('https://www.surveymonkey.com')
    },

    after: browser => {
       browser.end()
   },

"QM-3: Login & Logout" : browser => {
    functions.loginFunction(browser,selectors,data.userdata)
},

 /*   
"QM-13 Edit a Question" : browser => functions.editQuestionFunction(browser,selectors.editQuestion,data.editQuestionData),
*/

"QM-32 Analyzing Survey Results" : browser => {functions.analyzingDataFunction(browser,selectors,data)},


}
