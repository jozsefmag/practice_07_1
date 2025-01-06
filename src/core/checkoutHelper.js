
class checkoutHelper{
    get firstNameField() {
        return $('#first-name');
    }

    get lastNameField() {
        return $('#last-name');
    }

    get postalCodeField() {
        return $('#postal-code');
    }

    get continueButton() {
        return $('#continue');
    }

    get itemName() {
        return $('.inventory_item_name');
    }

    get totalLabel() {
        return $('.summary_total_label');
    }

    get finishButton() {
        return $('#finish');
    }

    get backHomeButton() {
        return $('#back-to-products');
    }
}

export default new checkoutHelper