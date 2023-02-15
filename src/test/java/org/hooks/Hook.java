package org.hooks;

import org.base.BaseClass;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Hook extends BaseClass {

	@Before
	@Given("Launch the browser and maximize the window")
	public void launch_the_browser_and_maximize_the_window() {
		LaunchBrowser();
		windowMaximize();
	}
	
	

	@After
	@Then("Close the browserfive")
	public void close_the_browserfive() {
		closeEntireBrowser();
	}
}