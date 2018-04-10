
module.exports = {
  'Login with a invalid username and valid password': function (browser) {
    var login = browser.page.commandsUI();

    login.navigate()
      .validatePage()
      .mainContent()
      .loginPage()
      .fillInForm('!==validusername', 'asd')

    browser.end();
  },

  'Login with invalid username and invalid password': function (browser) {
    var login = browser.page.commandsUI();


    login.navigate()
      .validatePage()
      .mainContent()
      .loginPage()
      .fillInForm('!==validusername', 'asd')

  },


  'Login with a valid username and invalid password': function (browser) {
    var login = browser.page.commandsUI();

    login.navigate()
      .validatePage()
      .mainContent()
      .loginPage()
      .fillInForm('valid==username', 'asd')

    browser.end();
  },

  'Login with valid username and valid password': function (browser) {
    var login = browser.page.commandsUI();

    login.navigate()
      .validatePage()
      .mainContent()
      .loginPage()
      .fillInForm('asd', 'asd')

    browser.end();

    browser.end();
  }

}