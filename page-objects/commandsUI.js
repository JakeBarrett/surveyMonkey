const data = require('../sources/data')

var UIcommands = {
    initialPage: function (titlepage) {
        return this
            .waitForElementPresent('body', 2000)
            .waitForElementVisible('body', 1000)
            .assert.title(titlepage)
            .assert.urlContains(data.url)
            .assert.visible('body')
            .verify.elementNotPresent('@errorMessage')

    },
    validatePage: function () {
        return this
            .waitForElementVisible('body', 1000)
            .assert.title(data.titlepage)
            .assert.urlContains('www.surveymonkey.com')
            .assert.visible('body')
            .verify.elementPresent('@logo')
            .assert.visible('@logo')
            .verify.elementNotPresent('@errorMessage')
    },
    mainContent: function () {
        return this
            .verify.elementPresent('@logo')
            .assert.visible('@logo')
            .waitForElementPresent('@navbar', 1000)
            .verify.elementPresent('@navbar')
            .assert.visible('@navbar')
            .waitForElementPresent('@carousel', 1000)
            .verify.elementPresent('@carousel')
            .assert.elementPresent('@carousel')
            .waitForElementPresent('@carouHead', 1000)
            .verify.elementPresent('@carouHead')
            .assert.elementPresent('@carouHead')
            .verify.containsText('@carouHead', data.carouHead)
            .waitForElementPresent('@iPhone1st', 1000)
            .verify.elementPresent('@iPhone1st')
            .assert.elementPresent('@iPhone1st')
            .waitForElementPresent('@iPhone2nd', 1000)
            .verify.elementPresent('@iPhone2nd')
            .assert.elementPresent('@iPhone2nd')
            .waitForElementPresent('@iPhone3rd', 1000)
            .verify.elementPresent('@iPhone3rd')
            .assert.elementPresent('@iPhone3rd')
    },
    signUpPage: function () {
		return this
            .waitForElementPresent('body', 2000)
			.waitForElementVisible('@homepageSignUpButton', 2000)
			.verify.elementPresent('@homepageSignUpButton')
			.assert.visible('@homepageSignUpButton')
			.verify.containsText('@homepageSignUpButton', 'SIGN UP')
			.click('@homepageSignUpButton')
    },
    loginPage: function () {
		return this
            .waitForElementPresent('body', 2000)
			.waitForElementVisible('@loginButtonCss', 5000)
			.verify.elementPresent('@loginButtonCss')
			.assert.visible('@loginButtonCss')
			.verify.containsText('@loginButtonCss', 'LOG IN')
            .click('@loginButtonCss')
            .verify.elementNotPresent('@errorMessage')
    },
    fillInForm: function (username, password) {
		return this
			.waitForElementVisible('body', 1000)
			.setValue('@usernameInput', username)
            .setValue('@passwordInput', password)
            .click('@submitButton')
	},
    createAccountPage: function () {
		return this
			.waitForElementPresent('body', 2000)
			.waitForElementPresent('@signUpPageHeader', 5000)
			.verify.visible('@signUpPageHeader')
			.assert.title('Sign up for a FREE SurveyMonkey account')
			.verify.elementPresent('@usernameInput')
			.assert.visible('@usernameInput')
			.verify.elementPresent('@passwordInput')
			.assert.visible('@passwordInput')
			.verify.elementPresent('@emailInput')
            .assert.visible('@emailInput')
			.verify.elementPresent('@firstNameInput')
			.assert.visible('@firstNameInput')
            .verify.elementPresent('@lastNameInput')
			.assert.visible('@lastNameInput')
            .verify.elementPresent('@signUpButton')
			.assert.visible('@signUpButton')
            .verify.containsText('@signUpButton', 'CREATE ACCOUNT')
    },
    createAccount: function (username, password, email, firstname, lastname) {
		return this
			.waitForElementVisible('body', 2000)
			.setValue('@usernameInput', username)
			.setValue('@passwordInput', password)
			.setValue('@emailInput', email)
            .setValue('@firstNameInput', firstname)
            .setValue('@lastNameInput', lastname)
            .click('@signUpButton')
            browser.pause(1000)
            .verify.elementPresent('@errorMessage')
            .verify.elementNotPresent('div[class="missing"]')
    },
    navigation: function () {
        return this 
            .waitForElementVisible('@navbar', 2000)
            .verify.visible('@navbar')
            .verify.visible('@howItWorks')
            .click('@howItWorks')

            .waitForElementVisible('@navbar', 2000)
            .verify.visible('@navbar')
            .verify.visible('@products')
            .click('@products')

            .waitForElementVisible('@navbar', 2000)
            .verify.visible('@navbar')
            .verify.visible('@examples')
            .click('@examples')
            
            .waitForElementVisible('@navbar', 2000)
            .verify.visible('@navbar')
            .verify.visible('@resources')
            .click('@resources')
            
            .waitForElementVisible('@navbar', 2000)
            .verify.visible('@navbar')
            .verify.visible('@planPricing')
            .click('@planPricing')
    },
    planPricing: function () {
        return this
            .waitForElementPresent('body', 2000)
            .waitForElementVisible('@enterpricePlan', 5000)
            .verify.visible('@enterpricePlan')
            .verify.containsText('@enterpricePlan', 'SEE ENTERPRICE PLAN')

            .waitForElementVisible('@basic', 2000)
            .verify.visible('@basic')
            .verify.containsText('@basic', 'BASIC')

            .waitForElementVisible('@standard', 2000)
            .verify.visible('@standard')
            .verify.containsText('@standard', 'STANDARD')


            .waitForElementVisible('@advantage', 2000)
            .verify.visible('@advantage')
            .verify.containsText('@advantage', 'ADVANTAGE')

            .waitForElementVisible('@premier', 2000)
            .verify.visible('@premier')
            .verify.containsText('@premier', 'PREMIER')


    },
    parallax: function () {
        return this
            .waitForElementVisible('@navbar', 2000)
            .verify.visible('@navbar')
            .verify.visible('#hero-arrow')
            .click('#hero-arrow')
            

    }
    

}
module.exports = {
    commands: [UIcommands],
    url: function () {
        return this.api.launchUrl;
    },
    elements: {
        // Login
        loginButtonXpath: {
            selector: '//li/a[contains(.,"LOG IN")]',
            locateStrategy: 'xpath'
        },
        loginButtonCss: 'a[class="log-in simplified_and_signup static-buttons"]',
        loginMessage: 'h1[class="wds-type--page-title max-width-header"]',
        usernameInput: 'input[id="username"]',
        passwordInput: 'input[id="password"]',
        submitButton: 'button[type="submit"]',
        welcomeMessage: 'h1[class="welcome-line"]',
        account: 'a[id="userAcctTab_MainMenu"]',
        signOut: 'a[href="/user/sign-out/"]',

        //Creating A Survey - Evan
        createSurvey: 'a[class="create-survey alt btn SL_split"]',
        scratch: 'button[id="scratch"]',
        surveyName: 'input[id="surveyTitle"]',
        createButton: {
            selector: '//button[.="CREATE SURVEY"]',
            locateStrategy: 'xpath'
        },
        getstarted: {
            selector: '//button[.="GET STARTED"]',
            locateStrategy: 'xpath'
        },
        keep: {
            selector: '(//a[@class="wds-button wds-button--sm"])[8]',
            locateStrategy: 'xpath'
        },
        mySurveys: {
            selector: '(//a[@href="/home/?ut_source=header"])[1]',
            locateStrategy: 'xpath'
        },
        testTitle: {
            selector: '//a[@title="Testing Do Not Delete"]',
            locateStrategy: 'xpath'
        },


        // UI Testing
        logo: 'a[class="responsive-logo static-logo"]',
        navbar: 'div[id="hd"]',

        //nav menu
        howItWorks: 'a[href="/mp/take-a-tour/?ut_source=header"]',
        products: {
            selector: '//*[@id="hd"]/div/ol/li[2]/div/a',
            locateStrategy: 'xpath'
        },
        examples: {
            selector: '//*[@id="hd"]/div/ol/li[3]/div/a',
            locateStrategy: 'xpath'
        },
        resources: {
            selector: '//*[@id="hd"]/div/ol/li[4]/div/a',
            locateStrategy: 'xpath'
        },
        planPricing: 'a[href="/pricing/?ut_source=header"]',
        enterpricePlan: 'div[class="cell size1of2 text-right"]',
        basic: {
            selector: '(//h3[@class="package-name"])[1]',
            locateStrategy: 'xpath'
        },
        standard: {
            selector: '(//h3[@class="package-name"])[1]',
            locateStrategy: 'xpath'
        },
        advantage: {
            selector: '(//h3[@class="package-name"])[4]',
            locateStrategy: 'xpath'
        },
        premier: {
            selector: '(//h3[@class="package-name"])[5]',
            locateStrategy: 'xpath'
        },

        //main
        banner: 'h1[class="national-med white medium hero-text-1"]',
        signUpBut: 'a[class="cta yellow-btn hero-btn left-btn"]', //PRO SIGN UP button
        signUpFree: 'a[class="cta green-white-green hero-btn"]', //SIGN UP FREE button
        carouHead: 'h1[class="national-med hero-text-2"]',
        carousel: 'div[class="carousel"]',
        carouBut: 'div[class="buttons"]', //Carousel button
        creSurBut: 'a[class="cta green-white-green large-btn hero-btn"]', //CREATE SURVEY button from homepage
        iPhone1st: 'div[class="first right size7of12 desktop"]',
        iPhone2nd: 'div[class="second left size7of12 desktop"',
        iPhone3rd: 'div[class="third right size7of12 desktop"]',
        allPlans: 'a[class="cta white-green-btn large-btn hero-btn"]', //SEE ALL PLANS button
        learnMor: 'a[class="cta blue-white-btn large-btn hero-btn"]', //LEARN MORE button
        getStarted: 'a[class="cta green-white-green large-btn"]', //GET STARTED button



        //Adding and Deleting Questions - Evan
        mS: {
            selector: '(//a[contains(text(), "My Surveys")])[1]',
            locateStrategy: 'xpath'
        },
        addQ: {
            selector: '(//span[@class="smf-icon"])[1]',
            locateStrategy: 'xpath'
        },
        enterQ: {
            selector: '(//div[@data-id="editTitle"])[1]',
            locateStrategy: 'xpath'
        },
        questionType: {
            selector: '(//span[@class="dropdownArrow smf-icon"])[2]',
            locateStrategy: 'xpath'
        },
        singleTB: {
            selector: '//a[@data-action="SingleTextboxQuestion"]',
            locateStrategy: 'xpath'
        },
        nextQ: {
            selector: '(//a[.="NEXT QUESTION"])[1]',
            locateStrategy: 'xpath'
        },
        qType: {
            selector: '//a[@id="changeQType"]',
            locateStrategy: 'xpath'
        },
        save: {
            selector: '(//a[@class="wds-button wds-button--sm save"])[1]',
            locateStrategy: 'xpath'
        },
        questionTwo: {
            selector: '(//div[@class="question-body clearfix notranslate "])[2]',
            locateStrategy: 'xpath'
        },
        questionActions: {
            selector: '(//nav[@class"questionsActions]")[2]',
            locateStrategy: 'xpath'
        },
        deleteQuestion: {
            selector: '//a[@name="Delete"]',
            locateStrategy: 'xpath'
        },

        //Sending Survey - Evan
        collectResponces: '//a[@data-location="collect"]',
        xButton: '//a[@class="dialog-close-btn cb-dialog-b smf-icon"]',
        webLink: '//li[@collector-type="weblink"]',
        copyButton: '//button[@id="copy-link-btn"]',

        //Deleting Surey - Evan
        threeDots: '//a[@data-survey-title="Testing Do Not Delete"]',
        deleteSurvey: '(//a[@data-action="delete"])[2]',
        testDeleteTitle: '(//span[@class="svy-title notranslate"])[2]',
        redDelete: '(//a[@class="wds-button wds-button--warning delete-survey"])[2]',

        // signup
            homepageSignUpButton: 'a[class="sign-up static-buttons"]',
            signUpPageHeader: 'h1[class="wds-type wds-type--page-title wds-type--center wds-m-t-4"]',
            usernameInput: 'input[name="username"]',
            passwordInput: 'input[name="password"]',
            emailInput: 'input[name="email"]',
            firstNameInput: 'input[name="first_name"]',
            lastNameInput: 'input[name="last_name"]',
            signUpButton: 'button[name="submit"]',
            welcomeText: 'div[id="group_welcome_flow_user_purpose_v3"]',
            errorMessage : 'div[class="ErrorMessage"]',
    

        //Editing an Existing Question

        // editQuestion: {
        //     mySurveys: '//li/a[contains(.,"My Surveys")]',
        //     surveyTitle: '//p/a[contains(.,"Edit Question Test")]',
        //     designSurvey: '//li/a[contains(.,"DESIGN SURVEY")]',
        //     getStarted: 'button[class="wds-button"]',
        //     question1: 'div[data-qnumber="1"]',
        //     dropDown: 'span[class="qType"]',
        //     multipleChoice: 'a[data-help="qmc"]',
        //     tealBox: 'a[data-action="pipingMenu"]',
        //     questionInput: 'div[class="rte sm-input sm-input--stretch mce-content-body mce-edit-focus"]',
        //     answerInput: '(//div[@class="rte input"])[2]',
        //     saveButton: 'a[class="wds-button wds-button--sm save"]',

        // },

        //Analyzing Results
        analyzeDataSurvey: '//p/a[contains(.,"Analyzing Data Test")]',
        analyzeResultsButton: 'a[data-location="analyze"]',
        questionsSummaries: 'li[id="mode_tab_question_summaries"]',
        dataTrends: 'li[id="mode_tab_trends"]',
        individualResponses: 'li[id="mode_tab_individual_responses"]',
        dataTrendsPage: 'div[class="analyze-pages-content"]',
        individualResponsesPage: 'div[class="analyze-pages-content-wrapper"]',
        mySurveysButton: '(//li/a[contains(.,"My Surveys")])[1]'



    }


}
