// pages/CartPage.js

// #region Imports
const { expect } = require('@playwright/test');
// #endregion

class CartPage {
  // #region Construtor
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartList = page.locator('.cart_list');
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('a.checkout_button');
  }
  // #endregion

  // #region Verificações
  /**
   * Verifica o número de itens no badge do carrinho
   */
  async verifyCartBadgeCount(expectedCount) {
    await this.cartBadge.waitFor({ state: 'visible', timeout: 10000 });
    await expect(this.cartBadge).toHaveText(expectedCount.toString());
  }

  /**
   * Verifica se um item está visível no carrinho
   */
  async verifyCartItemVisibility(productName) {
    await this.page.locator(`text=${productName}`).waitFor({ state: 'visible' });
  }

  /**
   * Verifica detalhes do item no carrinho
   */
  async verifyCartItemDetails() {
    await this.page.locator('.inventory_item_price').waitFor({ state: 'visible' });
  }

  /**
   * Verifica se um item não está no carrinho
   */
  async verifyItemNotInCart(productName) {
    await expect(this.page.locator(`text=${productName}`)).toHaveCount(0);
  }

  /**
   * Verifica se um item está no carrinho
   */
  async verifyItemInCart(productName) {
    await expect(this.cartList).toBeVisible();
    await expect(this.cartItems.locator(`text=${productName}`)).toBeVisible();
  }

  /**
   * Verifica se a lista do carrinho está visível
   */
  async verifyItemInCartList() {
    await expect(this.cartList).toBeVisible();
  }
  // #endregion

  // #region Ações
  /**
   * Clica no botão de checkout
   */
  async clickCheckout() {
    await expect(this.checkoutButton).toBeVisible();
    await this.checkoutButton.click();
  }

  /**
   * Remove um item do carrinho
   */
  async removeItemFromCart(productName) {
    const item = this.page.locator(`.cart_item:has-text("${productName}")`);
    await item.locator('.btn_secondary:has-text("REMOVE")').click();
  }
  // #endregion
}

// #region Exports
module.exports = CartPage;
// #endregion