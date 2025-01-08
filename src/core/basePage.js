class BasePage{

    async openPage(url = 'https://www.saucedemo.com/') {
        await browser.url(url)
    }
    
    async setFieldValues(selector, value) {
        await selector.setValue(value)  
    }
    
    async clickElement(selector) {
        await selector.click()
    }

    async getText(selector) {
        return await selector.getText() 
    }

}
export default new BasePage()