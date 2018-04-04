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
    getStarted: '//button[@class="wds-button"]',
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
    },

    editQuestion : {
        mySurveys : '//ol/li[contains(.,"My Surveys")]',
        surveyTitle: 'a[title="Do Not Delete me"]',
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

}
