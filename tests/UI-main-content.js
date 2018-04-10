
module.exports = {
    'Load application SurveyMonkey.com': function (browser) {
        var load = browser.page.commandsUI();

        load.navigate()
            .initialPage("SurveyMonkey: The World’s Most Popular Free Online Survey Tool")
        browser.end()
    },
    'Load initial page': function (browser) {
        var page = browser.page.commandsUI();

        page.navigate()
            .initialPage("SurveyMonkey: The World’s Most Popular Free Online Survey Tool")
            .validatePage()
        browser.end()
    },
    'Load main content': function (browser) {
        var main = browser.page.commandsUI();

        main.navigate()
            .initialPage("SurveyMonkey: The World’s Most Popular Free Online Survey Tool")
            .validatePage()
            .mainContent()
        browser.end()
    }
}


