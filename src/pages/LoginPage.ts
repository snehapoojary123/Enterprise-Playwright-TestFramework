import { Page, PageAssertionsToHaveScreenshotOptions } from "@playwright/test";
import HomePage from "../pages/HomePage";
import { error } from "console";

export default class LoginPage{
    private readonly userInputSelector ="#username";
    private readonly passwordInputSelector ="#password";
    private readonly loginButtonSlector ="#Login";

    constructor(private page:Page){

    }

    async navagateToLoginPage(){
        await this.page.goto("/");
    }

    async fillUsername(username: string){
        await this.page.locator(this.userInputSelector).fill(username);
    }

    async fillPassword(password: string){
        await this.page.locator(this.passwordInputSelector).fill(password);
    }

    async clickLoginButton(){
        await this.page
        .locator(this.loginButtonSlector)
        .click()
        .catch((error)=>{
            console.error('Error clicking login button: ${error}');
            throw error; //rethrow error if needed

        })

        const homePage = new HomePage(this.page);
        return homePage;
    
    }
}