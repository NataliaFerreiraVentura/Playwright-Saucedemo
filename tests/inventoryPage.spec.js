const { test } = require('@playwright/test');
// #region Imports
require('dotenv').config();
const LoginPage = require('../pages/loginPage');
const InventoryPage = require('../pages/inventoryPage');
// #endregion

test.beforeEach(async ({ page }) => {

  // #region Setup: beforeEach
  /**
   * Inicializa os Page Objects e faz login antes de cada teste
   */
  let login;
  let inventory;
  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    inventory = new InventoryPage(page);
    await login.loginWithSuccess();
  });
})
// #endregion


// #region Teste: Verifica inventário
/**
 * Verifica inventário, ordena por preço, adiciona item ao carrinho
 */
test('verifica inventário', async ({ page }) => {
  await inventory.verifyPage();
  await inventory.verifyProductListVisible();
  await inventory.verifyProductCount(6);
  await inventory.applySortFilter('Price (low to high)');
  await inventory.verifyProductsInPriceOrder();
  await inventory.addItemToCart('Sauce Labs Backpack');
  await inventory.goToCart();
});
// #endregion

// #region Teste: Verifica lista de produtos em ordem alfabética
/**
 * Ordena produtos em ordem alfabética e verifica
 */
test('verifica lista de produtos em ordem alfabética', async ({ page }) => {
  await inventory.applySortFilter('Name (A to Z)');
  await inventory.verifyProductsInAlphabeticalOrder('asc');
});
// #endregion