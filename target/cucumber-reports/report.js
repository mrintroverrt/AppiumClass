$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/booking.feature");
formatter.feature({
  "name": "As a User, I want to Order the food",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "zomato.i_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I launch the URL",
  "keyword": "When "
});
formatter.match({
  "location": "zomato.i_launch_the_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user gives the invalid “User name” and “password”",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "When "
});
formatter.match({
  "location": "zomato.i_click_the_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the invalid username",
  "keyword": "And "
});
formatter.match({
  "location": "zomato.i_enter_the_invalid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the invalid password",
  "keyword": "And "
});
formatter.match({
  "location": "zomato.i_enter_the_invalid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "zomato.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I take a screenshot",
  "keyword": "And "
});
formatter.match({
  "location": "zomato.i_take_a_screenshot()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "zomato.i_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I launch the URL",
  "keyword": "When "
});
formatter.match({
  "location": "zomato.i_launch_the_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The User successfully add the Dosa",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I click the dosa button",
  "keyword": "When "
});
formatter.match({
  "location": "zomato.i_click_the_dosa_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d109.0.5414.120)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WINDOWS-CSN1KR0\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 109.0.5414.120, chrome: {chromedriverVersion: 109.0.5414.74 (e7c5703604da..., userDataDir: C:\\Users\\Home\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:51258}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 46099395f5250e34f3d078cd08ce71c4\n*** Element info: {Using\u003dxpath, value\u003d//h6[contains(text(),\u0027Dosa\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.stepdefinition.zomato.i_click_the_dosa_button(zomato.java:87)\r\n\tat ✽.I click the dosa button(src/test/resources/booking.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click the masala dosa option",
  "keyword": "And "
});
formatter.match({
  "location": "zomato.i_click_the_masala_dosa_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the add to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "zomato.i_click_the_add_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "zomato.i_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I launch the URL",
  "keyword": "When "
});
formatter.match({
  "location": "zomato.i_launch_the_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user fills out the registration form and ignores the confirm password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I click the account button",
  "keyword": "When "
});
formatter.match({
  "location": "zomato.i_click_the_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the name in the name box",
  "keyword": "And "
});
formatter.match({
  "location": "zomato.i_enter_the_name_in_the_name_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the email in the email box",
  "keyword": "And "
});
formatter.match({
  "location": "zomato.i_enter_the_email_in_the_email_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the number in the mobile number field",
  "keyword": "And "
});
formatter.match({
  "location": "zomato.i_enter_the_number_in_the_mobile_number_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password in the password field",
  "keyword": "And "
});
formatter.match({
  "location": "zomato.i_enter_the_password_in_the_password_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click register button",
  "keyword": "And "
});
formatter.match({
  "location": "zomato.click_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I take a screenshot of the pop-up",
  "keyword": "And "
});
formatter.match({
  "location": "zomato.i_take_a_screenshot_of_the_pop_up()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "zomato.i_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I launch the URL",
  "keyword": "When "
});
formatter.match({
  "location": "zomato.i_launch_the_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user search for the “Coke” can and check the price",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature"
    },
    {
      "name": "@Scenario4"
    }
  ]
});
formatter.step({
  "name": "I click the search icon",
  "keyword": "When "
});
formatter.match({
  "location": "zomato.i_click_the_search_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the text coke in the search field",
  "keyword": "And "
});
formatter.match({
  "location": "zomato.i_enter_the_text_coke_in_the_search_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the enter button",
  "keyword": "And "
});
formatter.match({
  "location": "zomato.i_hit_the_enter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check the price of the can of Coke",
  "keyword": "And "
});
formatter.match({
  "location": "zomato.i_check_the_price_of_the_can_of_Coke()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "zomato.i_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I launch the URL",
  "keyword": "When "
});
formatter.match({
  "location": "zomato.i_launch_the_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user selects the “Spanish Omelet”",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature"
    },
    {
      "name": "@Scenario5"
    }
  ]
});
formatter.step({
  "name": "Click the search icon",
  "keyword": "When "
});
formatter.match({
  "location": "zomato.click_the_search_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pass the text as x",
  "keyword": "And "
});
formatter.match({
  "location": "zomato.pass_the_text_as_x()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the enter button",
  "keyword": "And "
});
formatter.match({
  "location": "zomato.click_the_enter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the option by probability",
  "keyword": "And "
});
formatter.match({
  "location": "zomato.select_the_option_by_probability()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the dollar probability.",
  "keyword": "And "
});
formatter.match({
  "location": "zomato.check_the_dollar_probability()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "zomato.i_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I launch the URL",
  "keyword": "When "
});
formatter.match({
  "location": "zomato.i_launch_the_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user read “Our Story”",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature"
    },
    {
      "name": "@Scenario6"
    }
  ]
});
formatter.step({
  "name": "Click the our story",
  "keyword": "When "
});
formatter.match({
  "location": "zomato.click_the_our_story()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check the spelling mistake.",
  "keyword": "And "
});
formatter.match({
  "location": "zomato.check_the_spelling_mistake()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat org.stepdefinition.zomato.check_the_spelling_mistake(zomato.java:234)\r\n\tat ✽.Check the spelling mistake.(src/test/resources/booking.feature:50)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});