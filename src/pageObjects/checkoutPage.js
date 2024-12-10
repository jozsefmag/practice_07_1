class CheckoutPage {
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

    async fillPersonalInfo(firstName, lastName, postalCode) {
        await this.firstNameField.setValue(firstName);
        await this.lastNameField.setValue(lastName);
        await this.postalCodeField.setValue(postalCode);
        await this.continueButton.click();
    }

    async finishShopping() {
        await this.finishButton.click();
    }

    async backToProducts() {
        await this.backHomeButton.click();
    }

    async getItemName() {
        return await this.itemName.getText();
    }

    async getTotalPrice() {
        return await this.totalLabel.getText();
    }
}

export default new CheckoutPage();
