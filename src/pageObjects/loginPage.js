class LoginPage {
    async openPage() {
        await browser.url('https://www.saucedemo.com/');
    }
    
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
        await this.userNameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }

    async getPageTitle() {
        return await browser.getTitle();
    }
}

export default new LoginPage();
