import basePage from '../core/basepage'
class LoginPage {
    async login(username, password) {
        await basePage.userNameField.setValue(username);
        await basePage.passwordField.setValue(password);
        await basePage.loginButton.click();
    }

    async getPageTitle() {
        return await browser.getTitle();
    }
}

export default new LoginPage();
