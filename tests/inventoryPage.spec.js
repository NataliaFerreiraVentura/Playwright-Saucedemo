const { test } = require('@playwright/test');
// #region Imports
require('dotenv').config();
const LoginPage = require('../pages/loginPage');
const inventoryPage = require('../pages/inventoryPage');
// #endregion

let login;
let inventory;
// #region Setup: beforeEach
/**
 * Inicializa os Page Objects e faz login antes de cada teste
 */
test.beforeEach(async ({ page }) => {
  login = new LoginPage(page);
  inventory = new inventoryPage(page);
  await login.loginWithSuccess();
});
// #endregion
// #endregion


// #region Teste: Verifica nome, descrição e preço do produto
/**
 * Verifica nome, descrição e preço do produto Sauce Labs Backpack
 */
test('verifica detalhes do produto Sauce Labs Backpack', async ({ page }) => {
  const expectedProducts = [
    {
      name: 'Sauce Labs Backpack',
      price: '$29.99',
      description: 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.'
    }
  ];
  await inventory.verifyProductsDetails(expectedProducts);
});
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