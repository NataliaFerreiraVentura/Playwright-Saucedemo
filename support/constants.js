// support/constants.js
module.exports = {
    BASE_URL: 'https://www.saucedemo.com/v1/index.html',
    VALID_USERNAME: process.env.PLAYWRIGHT_USER || 'standard_user',
    VALID_PASSWORD: process.env.PLAYWRIGHT_PASS || 'secret_sauce',
    INVALID_USERNAME: 'usuario_invalido',
    INVALID_PASSWORD: 'senha_invalida',
    PRODUTO1: 'Sauce Labs Backpack',
    PRODUTO2: 'Sauce Labs Bike Light',
};
