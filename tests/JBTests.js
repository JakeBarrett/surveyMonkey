const selectors = require('..//selectors')
const functions = require('..//functions')
const data = require('..//data')

module.exports = {

    before : browser => {
        browser.url('https://www.surveymonkey.com')
    },

    after: browser => {
       browser.end()
   },

"QM-3: Login & Logout" : browser => functions.loginFunction(browser,selectors,data.userdata),
    
"QM-13 Edit a Question" : browser => {

    browser
    .useXpath()
    .click('//ol/li[contains(.,"My Surveys")]')
    .useCss()
    //Change the selector below to the name of the survey you are searching for.
    .click('a[title="Do Not Delete me"]')
    .useXpath()
    .click('//li/a[contains(.,"DESIGN SURVEY")]')
    .useCss()
    .click('button[class="wds-button"]')
    .click('div[data-qnumber="1"]')
    .click('span[class="qType"]')
    .click('a[data-help="qmc"')
    .waitForElementVisible('a[data-action="pipingMenu"]',1000)
    .clearValue('div[class="rte sm-input sm-input--stretch mce-content-body mce-edit-focus"]')
    .setValue('div[class="rte sm-input sm-input--stretch mce-content-body mce-edit-focus"]', 'What is your favorite sport?')
    .useXpath()
    .setValue('(//div[@class="rte input"])[2]','Basketball')
    .setValue('(//div[@class="rte input"])[2]','Baseball')
    .setValue('(//div[@class="rte input"])[2]','Football')
    .setValue('(//div[@class="rte input"])[2]','Hockey')
    .useCss()
    .click('a[class="wds-button wds-button--sm save"]')
    .verify.containsText('div[data-qnumber="1"]',"What is your favorite sport?")
    

}

    }
