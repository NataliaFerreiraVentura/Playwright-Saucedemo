const { test } = require('@playwright/test');
// #region Imports
require('dotenv').config();
const LoginPage = require('../pages/loginPage');
const InventoryPage = require('../pages/inventoryPage');
const CartPage = require('../pages/cartPage');
const CheckoutPage = require('../pages/checkoutPage');
const { PRODUTO1, PRODUTO2 } = require('../support/constants');
// #endregion

let login, inventory, cart, checkout;
// #region Setup: beforeEach
/**
 * Inicializa os Page Objects e faz login antes de cada teste
 */
test.beforeEach(async ({ page }) => {
  login = new LoginPage(page);
  inventory = new InventoryPage(page);
  cart = new CartPage(page);
  checkout = new CheckoutPage(page);
  await login.loginWithSuccess();
});
// #endregion
// #endregion


// #region Teste: Finaliza compra com sucesso
/**
 * Adiciona dois produtos ao carrinho, finaliza a compra e verifica sucesso
 */
test('finaliza compra com sucesso', async () => {
  await inventory.addItemToCart(PRODUTO1);
  await inventory.addItemToCart(PRODUTO2);
  await inventory.goToCart();
  await cart.clickCheckout();
  await checkout.fillPaymentInformation();
  await checkout.clickContinue();
  await checkout.verifyPurchaseOverview();
  await checkout.clickFinish();
  await checkout.verifySuccessMessage();
});
// #endregion
