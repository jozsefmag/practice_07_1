import BasePage from "../core/basePage";
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
        await BasePage.clickElement(this.addToCartButton)
    }

    async goToCart() {
        await BasePage.clickElement(this.shoppingCartLink)
    }

    async proceedToCheckout() {
        await BasePage.clickElement(this.checkoutButton)
        
    }

    async getItemPrice() {
        return await BasePage.getText(this.itemPrice);
    }
}

export default new InventoryPage();
