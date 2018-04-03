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
    testTitle: '//a[@title="This is a test"]',

 
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
}
