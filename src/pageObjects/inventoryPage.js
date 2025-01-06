import inventoryHelper from "../core/inventoryPageHelper";

class InventoryPage {
    async addItemToCart() {
        await inventoryHelper.addToCartButton.click();
    }

    async goToCart() {
        await inventoryHelper.shoppingCartLink.click();
    }

    async proceedToCheckout() {
        await inventoryHelper.checkoutButton.click();
    }

    async getItemPrice() {
        return await inventoryHelper.itemPrice.getText();
    }
}

export default new InventoryPage();
