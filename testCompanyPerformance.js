const login = require('./login.js');
const logout = require('./logout.js');
module.exports = async function(context, commands) {
  const seleniumWebdriver = context.selenium.webdriver;
  const seleniumDriver = context.selenium.driver;
  const button_home = "//*[@data-element='header.home']";
try {
    async function testCompany(nameTest, nameCompany, items){
        await commands.measure.start(nameTest);
        await commands.click.byXpathAndWait("//*[@data-element='content.companies.item']//h2[text()='"+nameCompany+"']");
        await commands.wait.byPageToComplete();

        for(let i = 1; i < items; i++){
            await seleniumDriver.wait(seleniumWebdriver.until.elementLocated(seleniumWebdriver.By.xpath("(//*[@data-element='content.documents.item'])["+i+"]")), 5000, 'Timed out after 5 seconds', 500);
            await seleniumDriver.executeScript("arguments[0].scrollIntoView(true);", seleniumDriver.findElement(seleniumWebdriver.By.xpath("(//*[@data-element='content.documents.item'])["+i+"]")));
        }
    await commands.measure.stop();
    await commands.click.byXpathAndWait(button_home);
    }
    await login(context, commands);
    await commands.wait.byPageToComplete();
    await testCompany("test company performance_1", "performance_1", 266);
    await testCompany("test company performance_2", "performance_2", 316);
    await testCompany("test company performance_3", "performance_3", 264);
    await logout(context, commands);

} catch(e) {
  context.log.error(e);
}
};