exports.config = {
    runner: 'local',
    path: '/',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
    }],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: [
        ['spec',
            {
                outputDir: 'test/allure-results',
            },
        ],
        ['allure',
            {
                outputDir: 'test/allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
                useCucumberStepReporter: false,
            },
        ],
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: function(test, context, { error, result, duration, passed }) {
        if (!passed) {
            browser.takeScreenshot();
        }
    },
}
