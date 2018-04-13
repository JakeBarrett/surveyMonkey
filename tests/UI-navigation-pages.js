
module.exports = {
    'Links and sites is live and functioning': function (browser) {
        var load = browser.page.commandsUI();

        load.navigate()
            .initialPage("SurveyMonkey: The World’s Most Popular Free Online Survey Tool")
            .validatePage()
            .mainContent()
            .navigation()
    },
    'Plan and Pricing Tab': function (browser) {
        var plans = browser.page.commandsUI();

        plans.navigate()
            .navigation()
            .monkeyPlans()
    },
    'Product tab': function (browser) {
        var products = browser.page.commandsUI();

        products.navigate()
            .products()
    },
    'Business Solution page': function (browser) {
        var business = browser.page.commandsUI();

        business.navigate()
                .initialPage('SurveyMonkey: The World’s Most Popular Free Online Survey Tool')
                .enterprise()
        browser.end()
    },

}
