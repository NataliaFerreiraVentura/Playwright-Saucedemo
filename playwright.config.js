// playwright.config.js
module.exports = {
    testDir: './tests',
    timeout: 30000,
    retries: 0,
    reporter: [
        ['list'],
        ['allure-playwright']
    ],
    use: {
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        baseURL: 'https://exemplo.com',
    },
};
