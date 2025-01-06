import checkoutHelper from "../core/checkoutHelper";
class CheckoutPage {
    
    async fillPersonalInfo(firstName, lastName, postalCode) {
        await checkoutHelper.firstNameField.setValue(firstName);
        await checkoutHelper.lastNameField.setValue(lastName);
        await checkoutHelper.postalCodeField.setValue(postalCode);
        await checkoutHelper.continueButton.click();
    }

    async finishShopping() {
        await checkoutHelper.finishButton.click();
    }

    async backToProducts() {
        await checkoutHelper.backHomeButton.click();
    }

    async getItemName() {
        return await checkoutHelper.itemName.getText();
    }

    async getTotalPrice() {
        return await checkoutHelper.totalLabel.getText();
    }
}

export default new CheckoutPage();
