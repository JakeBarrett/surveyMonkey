
module.exports = {
    'Invalid username, invalid password, and invalid email': function (browser) {
        var create = browser.page.commandsUI();

        create.navigate()
            .validatePage()
            .mainContent()
            .signUpPage()
            .createAccountPage()
            .createAccount(' ', '!=pw', 'mereniderdelacruz.com', 'renier', 'delacruz')
        browser.end();
    },

    'Invalid username, Invalid password, and Valid email': function (browser) {
        var create = browser.page.commandsUI();

        create.navigate()
            .validatePage()
            .mainContent()
            .signUpPage()
            .createAccountPage()
            .createAccount(' ', '!=pw', 'me@reniderdelacruz.com', 'renier', 'delacruz')
            browser.end();
    },

    'Invalid username, valid password, and Invalid email': function (browser) {
        var create = browser.page.commandsUI();

        create.navigate()
            .validatePage()
            .mainContent()
            .signUpPage()
            .createAccountPage()
            .createAccount(' ', 'valid=password', 'merenierdelacruz.com', 'renier', 'delacruz')
        browser.end();
    },

    'Valid username, invalid password, and Invalid email': function (browser) {
        var create = browser.page.commandsUI();

        create.navigate()
            .validatePage()
            .mainContent()
            .signUpPage()
            .createAccountPage()
            .createAccount('sdakdjsadkajshdasddasdadasdadsd', '!=pw', 'merenierdelacruz.com', 'renier', 'delacruz')
        browser.end();
    },
    'Invalid username, valid password, and valid email': function (browser) {
        var create = browser.page.commandsUI();

        create.navigate()
            .validatePage()
            .mainContent()
            .signUpPage()
            .createAccountPage()
            .createAccount(' ', 'validpassword', 'me@renierdelacruz.com', 'renier', 'delacruz')
        browser.end();
    },
    'Valid username, Valid password, and Invalid email': function (browser) {
        var create = browser.page.commandsUI();

        create.navigate()
            .validatePage()
            .mainContent()
            .signUpPage()
            .createAccountPage()
            .createAccount('sdakdjsadkajshdasddasdadasdadsd', 'validpassword', 'merenierdelacruz.com', 'renier', 'delacruz')
        browser.end();
    },
    'Valid username, invalid password, and Valid email': function (browser) {
        var create = browser.page.commandsUI();

        create.navigate()
            .validatePage()
            .mainContent()
            .signUpPage()
            .createAccountPage()
            .createAccount('sdakdjsadkajshdasddasdadasdadsd', '!=pw', 'me@renierdelacruz.com', 'renier', 'delacruz')
        browser.end();
    },
    'Valid username, Valid password, and Valid email': function (browser) {
        var create = browser.page.commandsUI();

        create.navigate()
            .validatePage()
            .mainContent()
            .signUpPage()
            .createAccountPage()
            .createAccount('sdakdjsadkajshdasddasdadasdadsd', 'validpassword', 'me@renierdelacruz.com', 'renier', 'delacruz')
            browser.end();
    }
}


