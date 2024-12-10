class InventoryPage {
    get itemPrice() {
        return $('.inventory_item_price');
    }

    get addToCartButton() {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get shoppingCartLink() {
        return $('.shopping_cart_link');
    }

    get checkoutButton() {
        return $('#checkout');
    }

    async addItemToCart() {
        await this.addToCartButton.click();
    }

    async goToCart() {
        await this.shoppingCartLink.click();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }

    async getItemPrice() {
        return await this.itemPrice.getText();
    }
}

export default new InventoryPage();
