var URL = "https://app-dev.dokka.biz/login";
var ID_EMAIL = "email";
var ID_PASSWORD = "password";
var SUBMIT_BUTTON = "submit_button";
var EMAIL = "ilya.makarov.co.il@gmail.com";
var PASSWORD = "Makarov@93";

module.exports = async function (context, commands) {
  await commands.navigate(URL);

  try {
    await commands.measure.start("Testing of login");
    await commands.addText.byId(EMAIL, ID_EMAIL);
    await commands.addText.byId(PASSWORD, ID_PASSWORD);
    await commands.click.byName(SUBMIT_BUTTON);
    await commands.wait.byPageToComplete();
    return commands.measure.stop();
  } catch (e) {
    context.log.error(e);
  }
};
