

// #region Imports
const { generateRandomName, generateRandomSurname, generateRandomZipCode } = require('../support/dataGenerators');
// #endregion

class CheckoutPage {
  // #region Construtor
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.zipCodeInput = page.locator('#postal-code');
    this.continueButton = page.locator('.btn_primary');
    this.finishButton = page.locator('.btn_action');
    this.summaryInfo = page.locator('.summary_info');
    this.successMessage = page.locator('.complete-header');
  }
  // #endregion

  // #region Navegação
  /**
   * Navega para a etapa de checkout
   */
  async gotoCheckout() {
    await this.page.click('.btn_action');
    await this.page.waitForURL('**/checkout-step-one.html');
  }
  // #endregion

  // #region Preenchimento
  /**
   * Preenche os campos de pagamento com dados aleatórios
   */
  async fillPaymentInformation() {
    const randomName = await generateRandomName();
    const randomSurname = await generateRandomSurname();
    const randomZipCode = await generateRandomZipCode();

    await this.firstNameInput.fill(randomName);
    await this.lastNameInput.fill(randomSurname);
    await this.zipCodeInput.fill(randomZipCode);
  }
  // #endregion

  // #region Ações
  /**
   * Clica no botão de continuar para avançar no checkout
   */
  async clickContinue() {
    await this.continueButton.click();
    await this.page.waitForURL('**/checkout-step-two.html');
  }

  /**
   * Finaliza a compra clicando no botão de finalizar
   */
  async clickFinish() {
    await this.finishButton.click();
    await this.page.waitForURL('**/checkout-complete.html');
  }
  // #endregion

  // #region Verificações
  /**
   * Verifica se o resumo da compra está visível
   */
  async verifyPurchaseOverview() {
    await this.summaryInfo.waitFor({ state: 'visible' });
    await this.page.getByText('Overview').waitFor();
  }

  /**
   * Verifica se a mensagem de sucesso está visível
   */
  async verifySuccessMessage() {
    await this.successMessage.waitFor({ state: 'visible' });
    await this.page.getByText('THANK YOU FOR YOUR ORDER').waitFor();
  }
  // #endregion
}

// #region Exports
module.exports = CheckoutPage;
// #endregion