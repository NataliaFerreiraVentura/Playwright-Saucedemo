const { test } = require('@playwright/test');
// #region Imports
require('dotenv').config();
const LoginPage = require('../pages/loginPage');
const InventoryPage = require('../pages/inventoryPage');
const CartPage = require('../pages/cartPage');
// #endregion
const { PRODUTO1, PRODUTO2 } = require('../support/constants');

let login, inventory, cart;

test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    inventory = new InventoryPage(page);
    cart = new CartPage(page);

    await login.loginWithSuccess();
    await inventory.verifyPage();
});


// #region Teste: Adicionar produto único
/**
 * Adiciona um produto ao carrinho e verifica se está presente
 */
test('adiciona um produto ao carrinho', async () => {
    await inventory.addItemToCart(PRODUTO1);
    await inventory.goToCart();
    await cart.verifyCartBadgeCount('1');
    await cart.verifyItemInCart(PRODUTO1);
});
// #endregion

// #region Teste: Adicionar dois produtos
/**
 * Adiciona dois produtos ao carrinho e verifica ambos
 */
test('adiciona dois produtos ao carrinho', async () => {
    await inventory.addItemToCart(PRODUTO1);
    await inventory.addItemToCart(PRODUTO2);
    await inventory.goToCart();
    await cart.verifyCartBadgeCount('2');
    await cart.verifyItemInCart(PRODUTO1);
    await cart.verifyItemInCart(PRODUTO2);
});
// #endregion

// #region Teste: Remover produto do carrinho
/**
 * Remove um produto do carrinho e verifica se foi removido
 */
test('remove um produto do carrinho', async () => {
    await inventory.addItemToCart(PRODUTO1);
    await inventory.addItemToCart(PRODUTO2);
    await inventory.goToCart();
    await cart.removeItemFromCart(PRODUTO1);
    await cart.verifyItemNotInCart(PRODUTO1);
    await cart.verifyItemInCart(PRODUTO2);
});
// #endregion