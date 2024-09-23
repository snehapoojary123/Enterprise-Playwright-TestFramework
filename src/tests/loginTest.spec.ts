// test script using POM

import test from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test("test",async({page})=>{

    const loginPage = new LoginPage(page);

    await loginPage.navagateToLoginPage();
    await loginPage.fillUsername("sneha@playwright.test.sandbox");
    await loginPage.fillPassword("Naplespizza@123");

    const homePage = await loginPage.clickLoginButton();
    await homePage.expectServiceTitleToBeVisible();

});