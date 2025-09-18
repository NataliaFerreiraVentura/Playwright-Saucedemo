// pages/InventoryPage.js

// #region Imports
const { expect } = require('@playwright/test');
// #endregion

class InventoryPage {
    // #region Construtor
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.sortSelect = page.locator('.product_sort_container');
        this.productPrices = page.locator('.inventory_item_price');
        this.productNames = page.locator('.inventory_item_name');
        this.productList = page.locator('.inventory_list');
        this.cartLink = page.locator('a.shopping_cart_link.fa-layers.fa-fw');
    }
    // #endregion

    // #region Filtro e Ordenação
    /**
     * Aplica filtro de ordenação nos produtos
     */
    async applySortFilter(sortOption) {
        await this.sortSelect.selectOption({ label: sortOption });
    }

    /**
     * Verifica se os produtos estão em ordem de preço
     */
    async verifyProductsInPriceOrder() {
        const pricesText = await this.productPrices.allTextContents();
        const prices = pricesText.map(price => parseFloat(price.replace('$', '')));
        const sortedPrices = [...prices].sort((a, b) => a - b);
        expect(prices).toEqual(sortedPrices);
    }

    /**
     * Verifica se os produtos estão em ordem alfabética
     */
    async verifyProductsInAlphabeticalOrder(order = 'asc') {
        const names = await this.productNames.allTextContents();
        const sortedNames = order === 'asc' ? [...names].sort() : [...names].sort().reverse();
        expect(names).toEqual(sortedNames);
    }
    // #endregion

    // #region Lista de Produtos
    /**
     * Verifica se a lista de produtos está visível
     */
    async verifyProductListVisible() {
        await expect(this.productList).toBeVisible();
    }

    /**
     * Verifica a quantidade de produtos
     */
    async verifyProductCount(expectedCount) {
        const count = await this.page.locator('.inventory_item').count();
        expect(count).toBe(expectedCount);
    }
    // #endregion

    // #region Página
    /**
     * Verifica se está na página de inventário
     */
    async verifyPage() {
        await this.page.waitForURL('**/inventory.html');
        expect(this.page.url()).toContain('/inventory.html');
    }
    // #endregion

    // #region Ações
    /**
     * Adiciona um item ao carrinho
     */
    async addItemToCart(productName) {
        const item = this.page.locator(`.inventory_item:has-text("${productName}")`);
        const button = item.locator('.btn_primary.btn_inventory');
        await expect(button).toHaveText('ADD TO CART');
        await button.click();
    }

    /**
     * Navega para o carrinho
     */
    async goToCart() {
        await this.cartLink.click();
        expect(this.page.url()).toContain('/cart.html');
    }
    // #endregion
}

// #region Exports
module.exports = InventoryPage;
// #endregion