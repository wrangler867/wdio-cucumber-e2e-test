import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";

/**
 * import chai from "chai" throws error when running
 * workaround -> import chai methods to be used directly in parenthesis
 * use methods without referencing chai
 *
 */

Given(/^google page is opened$/, async function () {
  console.log(`before opening browser`);
  await browser.url("https://www.google.com");
  await browser.pause(7000);
  console.log(`after opening browser`);
});

When(/^search with (.*)$/, async function (searchItem) {
  console.log(`>>> searchItem: ${searchItem}`);
  let searchBar = await $(`[name=q]`);
  await searchBar.setValue(searchItem);
  await browser.keys("Enter"); //simulates keyboard action of Enter
});

Then(/^click on first search result$/, async function () {
  let result = await $(`<h3>`);
  result.click();
});

Then(/^URL should match (.*)$/, async function (expectedURL) {
  console.log(`>>> expectedURL: ${expectedURL}`);
  let url = await browser.getUrl();
  expect(url).to.equal(expectedURL);
});

Given(/^a webpage is opened$/, async function () {
  await browser.url("");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

When(/^perform web interactions$/, async function () {
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
  // let num = "12345"
  // let inputElement = await $(`[type=number]`)
  // await inputElement.setValue("12345")    //addValue() does not clear the initial value
  // //type slowly by breaking up the string using charAt()
  // for(let i=0; i<num.length; i++){
  //     let charStr = num.charAt(i)
  //     await browser.pause(1000)
  //     await browser.keys(charStr)
  // }
  // await browser.pause(3000)
  /**
   * Drop down handling
   * 1. assert default option is selected
   *
   */
  // assert default option is selected
  //   let dropdown = await $('//select/option[@selected="selected"]')
  //   let val = await dropdown.getText()
  //   expect(val).to.equal("Please select an option")

  //let option = await $("#dropdown")
  //await option.selectByAttribute("value","1")
  //await option.selectByIndex(0)

  //   //get list/array of options
  //   let options = await $$(`select > option`)
  //   for (let i=0; i<options.length; i++){
  //     let element = options[i]
  //     let elementVal = await element.getText();
  //     console.log(`>> Options array: ${elementVal}`);
  //   }

  /**
   * Checkboxes
   *
   */

  //   let cb = await $(`//form[@id="checkboxes"]/input[1]`)
  //   await cb.click()
  //   await browser.pause(2000)

  //   if(await cb.isSelected()){
  //     await cb.click()
  //   }

  /** Windows Handling
   * getTitle
   * getWindowHandle()
   */

  //   //open new windows
  //   await $(`=Click Here`).click() //link text locator
  //   await browser.pause(1000)
  //   await $(`=Elemental Selenium`).click() //link text locator
  //   let currentWinTitle = await browser.getTitle()
  //   let parentWinHendles = await browser.getWindowHandle()
  //   console.log(`>> current window title: ${currentWinTitle}`);

  //   //alternatively use switchWindow()
  //   //switch to specific window
  //   let winHendles = await browser.getWindowHandle()
  //   for (let i = 0; i < winHendles.length; i++) {
  //     console.log(`Win handle: ${winHendles[i]}`)
  //     await browser.switchToWindow(winHendles[i])
  //     currentWinTitle = await browser.getTitle()

  //     if(currentWinTitle === "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro"){
  //         await browser.switchToWindow(winHendles[i])
  //         let headerTxt = (await $(`<h1>`)).getText()
  //         console.log(headerTxt);
  //         //additional actions here
  //         break
  //     }
  //   }

  //   //switch back to parent window
  //   await browser.switchToWindow(parentWinHendles)
  //   let Txt = await $(`<h3>`).getText()
  //   console.log(Txt);
  //   //continue rest of execution

  /**
   * Handling Alerts, Browser Auths
   * Methods used:
   * 1. isAlertOpen() -- returns bool
   * 2. acceptAlert()
   * 3. dismissAlert()
   * 4. getAlertText()
   * 5. sendAlertText()
   */

  /**
   *
   * File Upload
   */

  //console.log(process.cwd);     //current working directory
  /*await $(`#file-upload`).addValue(`${process.cwd}data/fileupload/dummy.txt`)
  await $(`#file-submit`).click()*/

  // await $(`=iFrame`).click()
  // let element = await $(`#mce_0_ifr`)
  // await browser.switchToFrame(element)

  // //interaction with frame
  // await $(`#tinymce`).setValue("this is an iframe")

  // //scrollIntoView() scrolls until it finds the element

  /**Handling Tables
   *
   */

  //1. Check number of rows and columns
  let rowCount = await $$(`//table[@id="table1"]/tbody/tr`).length;
  console.log(rowCount);
  expect(rowCount).to.equal(4);
  let colCount = await $$(`//table[@id="table1"]/thead/tr/th`).length;
  console.log(colCount);
  expect(colCount).to.equal(6);

  //2. gets all table data
  // let arr = []
  // for (let i=0; i< rowCount; i++){
  //   let personObj = {
  //     lastname: "",
  //     firstname: "",
  //     email: "",
  //     due: "",
  //     web: "",
  //   }
  //   for (let j=0; j< colCount; j++){
  //     let cellVal = await $(`//table[@id="table1"]/tbody/tr[${i+1}]/td[${j+1}]`).getText() //web table actually iterates from ind 1
  //     if (j === 0) personObj.lastname = cellVal
  //     if (j === 1) personObj.firstname = cellVal
  //     if (j === 2) personObj.email = cellVal
  //     if (j === 3) personObj.due = cellVal
  //     if (j === 4) personObj.web = cellVal

  //     arr.push(personObj)
  //   }
  // }
  // console.log(`>> Complete table: ${JSON.stringify(arr)}`); //need to change json object to string

  /**
   * Use execute method to run javascript methods as call back functions
   * ScrollBY()
   * ScrollTo()
   */

  // //scroll down
  // await browser.execute(() => {
  //   window.scrollBy(0, window.innerHeight)
  // })
  // //scroll up
  // await browser.execute(() => {
  //   window.scrollBy(0, -window.innerHeight)
  // })
  // //Scroll down
  // await browser.execute(()=> {
  //  window.scrollTo(0, document.body.scrollHeight)
  // })
  // //Scroll top
  // await browser.execute(()=> {
  //   window.scrollTo(0, document.body.scrollTop)
  // })

  await browser.debug();
});