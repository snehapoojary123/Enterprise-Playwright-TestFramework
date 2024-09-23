// test script using POM
import { encryptEnvFile } from "../utils/EncryptEnvFile";
import { decrypt, encrypt } from "../utils/CryptojsUtil";

import test from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test("test",async({page})=>{

    const loginPage = new LoginPage(page);

    await loginPage.navagateToLoginPage();
    await loginPage.fillUsername(process.env.userid!);
    await loginPage.fillPassword(process.env.password!);

    const homePage = await loginPage.clickLoginButton();
    await homePage.expectServiceTitleToBeVisible();

});

test.skip('sample env test',async({page})=>{

    // const plaintext = 'U2FsdGVkX1+IBRnoZ/Ox38llTpj7NCf3U0kAOYY5yuNuW4oDbG+ZsQGB5SqfZZzJ';
    // const encryptedText = encrypt(plaintext);
    // console.log('SALT:', process.env.SALT);
    // console.log('Encrypted:', encryptedText);
    // const decryptedText = decrypt(encryptedText);
    // console.log('Decrypted:', decryptedText);
   encryptEnvFile();
  // console.log(decrypt("U2FsdGVkX197mBdFhci0yNUxOudsGfcL4w5q9pV2n18JctWJ3ya5USIkbuPXjyd8"));

});