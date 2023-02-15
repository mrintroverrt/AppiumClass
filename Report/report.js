$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/icicbank.feature");
formatter.feature({
  "name": "To Validate the icic bank login page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To submit the login page the correct password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Prioty1"
    }
  ]
});
formatter.step({
  "name": "To lauch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "icicibank.to_lauch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Lauch the icic bank url",
  "keyword": "When "
});
formatter.match({
  "location": "icicibank.to_Lauch_the_icic_bank_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the user name dummy1",
  "keyword": "And "
});
formatter.match({
  "location": "icicibank.to_click_the_user_name_dummy(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the usern name in user id",
  "keyword": "And "
});
formatter.match({
  "location": "icicibank.to_pass_the_usern_name_in_user_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the pass in password",
  "keyword": "And "
});
formatter.match({
  "location": "icicibank.to_pass_the_pass_in_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the submit btn",
  "keyword": "And "
});
formatter.match({
  "location": "icicibank.to_click_the_submit_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "icicibank.to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});