const{Builder,By,Key,utill}=require("selenium-webdriver");
async function example(){
    let driver=await new Builder().forBrowser("chrome").build();
    await driver.get("http://google.com");
    await driver.findElement(By.name("q")).sendKeys("NTR",Key.RETURN);

}
example();
// // Import the selenium-webdriver library
// const { Builder, By, Key, until } = require('selenium-webdriver');

// async function exampleTest() {
//     // Initialize the WebDriver (using Chrome in this case)
//     let driver = await new Builder().forBrowser('chrome').build();

//     try {
//         // Open Google's website
//         await driver.get('https://www.google.com');

//         // Locate the search box, type 'Selenium' and press Enter
//         await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);

//         // Wait until the results are loaded and the title includes 'Selenium'
//         await driver.wait(until.titleContains('Selenium'), 10000);

//         console.log('Test Passed: The title contains "Selenium"');
//     } catch (error) {
//         console.error('Test Failed', error);
//     } finally {
//         // Close the browser
//         await driver.quit();
//     }
// }

// // Run the test
// exampleTest();
