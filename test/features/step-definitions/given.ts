import logger from "../../helper/logger";
import { Given } from "@wdio/cucumber-framework";
//import chai from chai;

Given(/^As (a|an) (.*) user I login to inventory web app$/, async function (prefixText, userType) {
    logger.info(`started login process`)
    /**Login */
    console.log(`>> the usertype: ${userType}`);
    console.log(`>> The prefixText: ${prefixText}`);
    //@ts-ignore
    await browser.url(browser.options.sauceDemoURL)
    console.log(`>>Test config values: ${JSON.stringify(browser.options)}`);
    
    await browser.setTimeout({implicit: 5000, pageLoad: 10000})
    await browser.maximizeWindow()

    /**Login to inventory app */
    try {
        await $(`#user-nam`).setValue(process.env.TEST_USERNAME);
        await $(`#password`).setValue(process.env.TEST_PASSWORD);
        await $(`#login-button`).click();
    } catch (err) {
        console.log(`Error in first login, retrying...`);
        await browser.refresh()
        await browser.pause(1000)
        await $(`#user-name`).setValue(`standard_user`);
        await $(`#password`).setValue(`secret_sauce`);
        await $(`#login-button`).click();
    }

    /** Login with another user */
    await browser.pause(2000)
    await browser.reloadSession()
    await browser.url("https://saucedemo.com")
    await $(`#user-name`).setValue(`problem_user`);
    await $(`#password`).setValue(`secret_sauce`);
    await $(`#login-button`).click();

    /**
     * browser.back()
     * browser.forward()
     * 
     */
    await browser.debug()
})