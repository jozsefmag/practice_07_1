import BasePage from '../core/basePage'
class LoginPage{

    get userNameField() {
        return $('#user-name');
    }

    get passwordField() {
        return $('#password');
    }

    get loginButton() {
        return $('#login-button');
    }
    
    async login(username, password) {
        await BasePage.setFieldValues(this.userNameField, username);
        await BasePage.setFieldValues(this.passwordField,password);
        await BasePage.clickElement(this.loginButton);
    }

    async getPageTitle() {
        return await browser.getTitle();
    }
}

export default new LoginPage();
