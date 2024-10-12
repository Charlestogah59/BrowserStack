import { test } from "@playwright/test";
const { LoginPage } = require("../pageObject/login");
const data  = require("../data/login.json");


test.describe("Login", () => {
  test("Should log users ", async ({page}) => {

    const loginPage = new LoginPage(page);
    const { user_name, pass_word} = data;

    await loginPage.openUrl();
    await loginPage.navigateToLoginPage();
    await loginPage.fillLoginCredentials(user_name, pass_word);
  });
});
