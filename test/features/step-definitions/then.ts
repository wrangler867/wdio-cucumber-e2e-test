import { Then } from "@wdio/cucumber-framework";
import { expect } from "chai";

Then(/^inventory page should list (.*)$/, async function(noOfProducts){ 
    if(!noOfProducts) throw Error (`Invalid number provided ${noOfProducts}`)
    let eleArr = await $$(`.inventory_item_name`)
    expect(eleArr.length).to.equal(parseInt(noOfProducts)) // === operation type and value
})