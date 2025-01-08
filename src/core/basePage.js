class BasePage{

    async openPage(url = 'https://www.saucedemo.com/') {
        await browser.url(url);
    }
    
    async setValue(selector, value) {
        let element;
        if (typeof selector === 'string') {
            element = await $(selector);  
        } else {
            element = selector;  
        }
        await element.setValue(value);  
    }
    
    async clickElement(selector) {
        let element;
        if (typeof selector === 'string') {
            element = await $(selector);
        } else {
            element = selector;
        }
        await element.click();
    }

    async getText(selector) {
        let element;
        if (typeof selector === 'string') {
            element = await $(selector); 
        } else {
            element = selector; 
        }
        return await element.getText(); 
    }

}
export default new BasePage()