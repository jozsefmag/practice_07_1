class basePage{
    async openPage(){
        await browser.url('https://www.saucedemo.com/')
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
}

export default new basePage()