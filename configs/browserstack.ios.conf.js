const path = require('node:path');

const allureOutputDir = path.resolve(__dirname, '../reports/allure-results');

const requiredEnvVars = [
  'BROWSERSTACK_USERNAME',
  'BROWSERSTACK_ACCESS_KEY'
];

const missingRequiredEnvVars = requiredEnvVars.filter((name) => !process.env[name]);

if (missingRequiredEnvVars.length > 0) {
  throw new Error(
    `Missing required environment variables for BrowserStack execution: ${missingRequiredEnvVars.join(', ')}`
  );
}

exports.config = {
  runner: 'local',
  protocol: 'https',
  hostname: 'hub-cloud.browserstack.com',
  port: 443,
  path: '/wd/hub',
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  specs: ['./test/specs/**/*.spec.js'],
  maxInstances: 1,
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 30000,
  connectionRetryTimeout: 180000,
  connectionRetryCount: 2,
  framework: 'mocha',
  reporters: [
    'spec',
    [
      'allure',
      {
        outputDir: allureOutputDir,
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false
      }
    ]
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 300000
  },
  capabilities: [
    {
      platformName: 'iOS',
      'appium:automationName': 'XCUITest',
      'appium:deviceName': 'iPhone 12 Pro',
      'appium:platformVersion': '14',
      'appium:app': 'bs://67e40fe7f68ec00d52a6bc75f8e590b37dd71148',
      'appium:noReset': false,
      'appium:newCommandTimeout': 240,
      'bstack:options': {
        projectName: 'EBAC Store Mobile iOS',
        buildName: process.env.BROWSERSTACK_BUILD_NAME ||
          `ci-ios-${process.env.GITHUB_RUN_NUMBER || 'local'}`,
        video: true,
        debug: true
      }
    }
  ],
  beforeSuite: async function () {
    let state = await driver.queryAppState('br.art.ebaconline');
    if (state !== 4) {
      await driver.launchApp();
    }
  },
  afterSuite: async function () {
    await driver.closeApp();
  },
  services: []
};