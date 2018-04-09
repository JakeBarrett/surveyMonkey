module.exports = {
// Login
    loginButtonXpath : '//li/a[contains(.,"LOG IN")]',
    loginButtonCss : 'a[class="log-in simplified_and_signup static-buttons"]',
    loginMessage : 'h1[class="wds-type--page-title max-width-header"]',
    usernameInput : 'input[id="username"]',
    passwordInput : 'input[id="password"]',
    submitButton : 'button[type="submit"]',
    welcomeMessage : 'h1[class="welcome-line"]',
    account : 'a[id="userAcctTab_MainMenu"]',
    signOut : 'a[href="/user/sign-out/"]',

//Creating A Survey
    createSurvey: 'a[class="create-survey alt btn SL_split"]',
    scratch: 'button[id="scratch"]',
    surveyName: 'input[id="surveyTitle"]',
    createButton: '//button[.="CREATE SURVEY"]',
    getstarted: '//button[@class="wds-button"]',
    keep: '(//a[@class="wds-button wds-button--sm"])[8]',
    mySurveys: '(//a[@href="/home/?ut_source=header"])[1]',
    testTitle: '//a[@title="Testing Do Not Delete"]',


// UI Testing
    logo: 'a[class="responsive-logo static-logo"]',
    navbar: 'div[id="hd"]',

    //nav menu
    howItWorks: 'a[href="/mp/take-a-tour/?ut_source=header"]',
    products: '//*[@id="hd"]/div/ol/li[2]/div/a',
    examples: '//*[@id="hd"]/div/ol/li[3]/div/a',
    resources: '//*[@id="hd"]/div/ol/li[4]/div/a',
    planPricing: 'a[href="/pricing/?ut_source=header"]',

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
    iphone3rd: 'div[class="third right size7of12 desktop"]',
    allPlans: 'a[class="cta white-green-btn large-btn hero-btn"]', //SEE ALL PLANS button
    learnMor: 'a[class="cta blue-white-btn large-btn hero-btn"]', //LEARN MORE button
    getStarted: 'a[class="cta green-white-green large-btn"]', //GET STARTED button



//Adding and Deleting Questions
    mS: '(//a[contains(text(), "My Surveys")])[1]',
    addQ: '(//span[@class="smf-icon"])[1]',
    enterQ: '(//div[@data-id="editTitle"])[1]',
    questionType: '(//span[@class="dropdownArrow smf-icon"])[2]',
    singleTB: '//a[@data-action="SingleTextboxQuestion"]',
    nextQ: '(//a[.="NEXT QUESTION"])[1]',
    qType: '//a[@id="changeQType"]',
    save: '(//a[@class="wds-button wds-button--sm save"])[1]',
    questionTwo: '(//div[@class="question-body clearfix notranslate "])[2]',
    questionActions: '(//nav[@class"questionsActions]")[2]',
    deleteQuestion: '(//a[class="wds-button wds-button--sm wds-button--util delete"]',

 
    'signup': {
        'homepageSignUpButton': 'a[class="sign-up static-buttons"]',
        'signUpPageTitle': 'h1[class="wds-type--page-title"]',
        'usernameInput': 'input[name="username"]',
        'passwordInput': 'input[name="password"]',
        'emailInput': 'input[name="email"]',
        'firstNameInput': 'input[name="first_name"]',
        'lastNameInput': 'input[name="last_name"]',
        'signUpButton': 'button[name="submit"]',
        'welcomeText': 'div[id="group_welcome_flow_user_purpose_v3"]',
        'errorMessage': 'div[class="ErrorMessage"]',
    },

//Editing an Existing Question

    editQuestion : {
        mySurveys : '//li/a[contains(.,"My Surveys")]',
        surveyTitle: '//p/a[contains(.,"Do Not Delete me")]',
        designSurvey: '//li/a[contains(.,"DESIGN SURVEY")]',
        getStarted: 'button[class="wds-button"]',
        question1: 'div[data-qnumber="1"]',
        dropDown: 'span[class="qType"]',
        multipleChoice : 'a[data-help="qmc"]',
        tealBox: 'a[data-action="pipingMenu"]',
        questionInput: 'div[class="rte sm-input sm-input--stretch mce-content-body mce-edit-focus"]',
        answerInput: '(//div[@class="rte input"])[2]',
        saveButton: 'a[class="wds-button wds-button--sm save"]',

    },

//Analyzing Results
    analyzeDataSurvey : '//p/a[contains(.,"Analyzing Data")]',
    analyzeResultsButton : 'a[data-location="analyze"]',
    questionsSummaries : 'li[id="mode_tab_question_summaries"]',
    dataTrends: 'li[id="mode_tab_trends"]',
    individualResponses: 'li[id="mode_tab_individual_responses"]',
    dataTrendsPage: 'div[class="analyze-pages-content"]',
    individualResponsesPage : 'div[class="analyze-pages-content-wrapper"]',
    mySurveysButton : '(//a[@href="/home/?ut_source=header"])[1]'



}
