// pages/LoginPage.js

// #region Imports
const { expect } = require('@playwright/test');
const { BASE_URL, VALID_USERNAME, VALID_PASSWORD, INVALID_USERNAME, INVALID_PASSWORD } = require('../support/constants');
// #endregion

class LoginPage {
  // #region Construtor
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('#login-button');
  }
  // #endregion

  // #region Navegação
  /**
   * Acessa a página de login
   */
  async visitPage() {
    await this.page.goto(BASE_URL);
  }
  // #endregion

  // #region Preenchimento
  /**
   * Preenche o campo de usuário
   */
  async fillUsername(username) {
    await this.usernameInput.fill(username);
  }

  /**
   * Preenche o campo de senha
   */
  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }
  // #endregion

  // #region Login
  /**
   * Preenche credenciais válidas
   */
  async fillWithValidCredentials() {
    await this.visitPage();
    await this.fillUsername(VALID_USERNAME);
    await this.fillPassword(VALID_PASSWORD);
  }

  /**
   * Realiza login com sucesso
   */
  async loginWithSuccess() {
    await this.visitPage();
    await this.fillUsername(VALID_USERNAME);
    await this.fillPassword(VALID_PASSWORD);
    await this.clickLoginButton();
  }

  /**
   * Preenche credenciais inválidas
   */
  async fillWithInvalidCredentials() {
    await this.visitPage();
    await this.fillUsername(INVALID_USERNAME);
    await this.fillPassword(INVALID_PASSWORD);
  }
  // #endregion

  // #region Ações
  /**
   * Clica no botão de login
   */
  async clickLoginButton() {
    await this.loginButton.click();
  }
  // #endregion

  // #region Verificações
  /**
   * Verifica mensagem de erro
   */
  async verifyErrorMessage(message) {
    const errorMessage = this.page.locator(`text=${message}`);
    await expect(errorMessage).toBeVisible();
  }
  // #endregion
}

// #region Exports
module.exports = LoginPage;
// #endregion
