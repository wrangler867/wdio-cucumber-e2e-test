import { Then } from "@wdio/cucumber-framework";
import { expect } from "chai";

Then(/^inventory page should list (.*)$/, async function(noOfProducts){ 
    if(!noOfProducts) throw Error (`Invalid number provided ${noOfProducts}`)
    let eleArr = await $$(`.inventory_item_name`)
    expect(eleArr.length).to.equal(parseInt(noOfProducts)) // === operation type and value
})

/**
 * 1. Get price list
 * 2. Convert str to num
 * 3. Assert if any val is <=0
 */
Then(/^validate all products have valid price$/, async function(){
    //Get price list for products
    let eleArr = await $$(`.inventory_item_price`)
    let priceStrArr = []
    for(let i = 0; i < eleArr.length; i++){
        let priceStr = await eleArr[i].getText()
        priceStrArr.push(priceStr)
    }
    console.log(` >> price with $: ${priceStrArr}`);

    //convert string to number
    let priceNumArr = priceStrArr.map(element => +(element.replace("$", ""))) //parseInt rounds value so we can use unirary operator
    console.log(priceNumArr);

    //assert if any value is <0
    let invalidPriceArr = priceNumArr.filter(element => element <=0)
    expect(invalidPriceArr.length).to.equal(0)
})