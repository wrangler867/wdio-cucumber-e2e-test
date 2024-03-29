import { Given } from "@wdio/cucumber-framework";
import chai from chai;

Given(/^login to inventory web app$/, async function () {
    /**Login */
    await browser.url("https://saucedemo.com")
    await browser.setTimeout({implicit: 15000, pageLoad: 10000})

    //await browser.maximizeWindow()

    /**Login to inventory app */
    await $(`#user-name`).setValue(`standard_user`);
    await $(`#password`).setValue(`secret_sauce`);
    await $(`#login-button`).click();


})

