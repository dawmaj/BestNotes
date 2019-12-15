const video = require('wdio-video-reporter');

exports.config = {
    runner: 'local',
    path: '/',
    suites: {
        login: ['./test/specs/suites/desktop/loginpage.test.js'],
        note: ['./test/specs/suites/desktop/notepage.test.js'],
        topic: ['./test/specs/suites/desktop/topicpage.test.js'],
    },
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--no-sandbox', '--headless', '--window-size=1366,968'],
        },
    }],

    logLevel: 'info',
    port: 9515,
    deprecationWarnings: true,
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
        [video, {
            saveAllVideos: true,
            videoSlowdownMultiplier: 3,
          }],
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
