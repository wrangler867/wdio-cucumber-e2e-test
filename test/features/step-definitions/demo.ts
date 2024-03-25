import { Given, When, Then} from "@wdio/cucumber-framework";
import {expect} from "chai"

/**
 * import chai from "chai" throws error when running
 * workaround -> import chai methods to be used directly in parenthesis
 * use methods without referencing chai
 * 
 */

Given(/^google page is opened$/, async function(){
    console.log(`before opening browser`);
    await browser.url("https://www.google.com");
    await browser.pause(7000);
    console.log(`after opening browser`);
})

When(/^search with (.*)$/, async function (searchItem) {
    console.log(`>>> searchItem: ${searchItem}`);
    let searchBar = await $(`[name=q]`)
    await searchBar.setValue(searchItem)
    await browser.keys("Enter") //simulates keyboard action of Enter
})

Then(/^click on first search result$/, async function(){
    let result = await $(`<h3>`)
    result.click();
})

Then(/^URL should match (.*)$/, async function(expectedURL){
    console.log(`>>> expectedURL: ${expectedURL}`);
    let url = await browser.getUrl();
    expect(url).to.equal(expectedURL)
})
