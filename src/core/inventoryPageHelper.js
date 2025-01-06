class inventoryHelper{
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
}

export default new inventoryHelper()