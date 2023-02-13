const button_profile = "//*[@data-element='header.profile']";
const button_logout = "//*[@data-element='header.logout']";

module.exports = async function (context, commands) {
  try {
    await commands.click.byXpathAndWait(button_profile);
    await commands.click.byXpathAndWait(button_logout);
  } catch (e) {
    context.log.error(e);
  }
};
