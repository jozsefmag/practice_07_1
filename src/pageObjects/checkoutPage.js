import BasePage from "../core/basePage"
class CheckoutPage {

    get firstNameField() {
        return $('#first-name')
    }

    get lastNameField() {
        return $('#last-name')
    }

    get postalCodeField() {
        return $('#postal-code')
    }

    get continueButton() {
        return $('#continue')
    }

    get itemName() {
        return $('.inventory_item_name')
    }

    get totalLabel() {
        return $('.summary_total_label')
    }

    get finishButton() {
        return $('#finish')
    }

    get backHomeButton() {
        return $('#back-to-products')
    }
    
    async fillPersonalInfo(firstName, lastName, postalCode) {
        await BasePage.setFieldValues(this.firstNameField,firstName)
        await BasePage.setFieldValues(this.lastNameField,lastName)
        await BasePage.setFieldValues(this.postalCodeField,postalCode)
        await BasePage.clickElement(this.continueButton)
    }

    async finishShopping() {
        await BasePage.clickElement(this.finishButton)
    }

    async backToProducts() {
        await BasePage.clickElement(this.backHomeButton)
    }

    async getItemName() {
        return await BasePage.getText(this.itemName)
    }

    async getTotalPrice() {
        return await BasePage.getText(this.totalLabel)
    }
}

export default new CheckoutPage()
