import { expect } from '@playwright/test';

export class LoginPage {

    constructor(page) {
        this.page = page;
        this.url = "https://demoblaze.com/";
        this.logOut = "#logout2"
        this.LoginLink = "#login2";
        this.username = "#loginusername";
        this.password = "#loginpassword";
        this.submitBtn = "[onclick='logIn()']"
        this.user = "#nameofuser";
    }

    async openUrl() {
        await this.page.goto(this.url);
    }

    async navigateToLoginPage() {
        if (await this.page.locator(this.logOut).isHidden()) {
            await this.page.locator(this.LoginLink).click();
        } else {
            console.log("User already logged in");
        }
    }

    async fillLoginCredentials(username, password) {
        await this.page.locator(this.username).fill(username);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.submitBtn).click(); 

        // Assertion to verify the user is logged in
        await expect(this.page.locator(this.user)).toContainText(`Welcome ${username}`);
    }
}