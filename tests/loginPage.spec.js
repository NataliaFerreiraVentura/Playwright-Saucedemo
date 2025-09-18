const { test, expect } = require('@playwright/test');
// #region Imports
require('dotenv').config();
const LoginPage = require('../pages/loginPage');
// #endregion
const { BASE_URL } = require('../support/constants');



// #region Teste: Login com sucesso
/**
 * Realiza login com credenciais válidas e verifica navegação para inventário
 */
test('login com sucesso', async ({ page }) => {
    const login = new LoginPage(page);
    await login.loginWithSuccess();
    await expect(page).toHaveURL(BASE_URL.replace('index.html', 'inventory.html'));
});
// #endregion

// #region Teste: Login com erro
/**
 * Tenta login com credenciais inválidas e verifica mensagem de erro
 */
test('login com erro', async ({ page }) => {
    const login = new LoginPage(page);
    await login.fillWithInvalidCredentials();
    await login.clickLoginButton();
    await login.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
});
// #endregion
