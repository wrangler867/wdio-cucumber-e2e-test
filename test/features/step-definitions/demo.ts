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


Given(/^a webpage is opened$/, async function(){
    await browser.url("")
    await browser.setTimeout({implicit: 15000, pageLoad: 10000})
    await browser.maximizeWindow()
})

When(/^perform web interactions$/, async function(){
    /**
     * Input box
     * Actions:
     * 1. Type into input box
     * 2. Clear the field and type or just addVal()
     * 3. Click and type
     * 4. Type slowly like a real user
     */

    /**
     * Additional useful methods:
     * scrollIntoView()
     * moveToElement()
     * click()
     * 
     */

    let num = "12345"

    let inputElement = await $(`[type=number]`)
    await inputElement.setValue("12345")    //addValue() does not clear the initial value

    //type slowly by breaking up the string using charAt()
    for(let i=0; i<num.length; i++){
        let charStr = num.charAt(i)
        await browser.pause(1000)
        await browser.keys(charStr)
    }
    
    await browser.pause(3000)

})