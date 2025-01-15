import loginPage from "../pageObjects/loginPage";
import inventoryPage from "../pageObjects/inventoryPage";
import checkoutPage from "../pageObjects/checkoutPage";
import BasePage from "../core/basePage";

import { expect, assert, should } from "chai";
should();

describe("Sauce Demo E2E Test", () => {
  before(async () => {
    await BasePage.openPage();
  });

  it("Check page title", async () => {
    const title = await loginPage.getPageTitle();
    assert.include(title, "Swag Labs");
  });

  it("Login to website", async () => {
    await loginPage.login("standard_user", "secret_sauce");
  });

  it("Add item to cart and checkout", async () => {
    const itemPrice = await inventoryPage.getItemPrice();
    expect(itemPrice).to.equal("$29.99");

    await inventoryPage.addItemToCart();
    await inventoryPage.goToCart();
    await inventoryPage.proceedToCheckout();

    await checkoutPage.fillPersonalInfo("John", "Doe", "4444");

    const itemName = await checkoutPage.getItemName();
    assert.equal(
      itemName,
      "Sauce Labs Backpack",
      "Item name should match the expected value",
    );

    const totalPrice = await checkoutPage.getTotalPrice();
    expect(totalPrice).to.include(
      "$32.39",
      "Total price should include $32.39",
    );
  });

  it("Finish shopping", async () => {
    await checkoutPage.finishShopping();
    await checkoutPage.backToProducts();
    expect(await $(".app_logo").getText()).to.equal("Swag Labs");
  });
});
