package org.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/booking.feature", glue = { "org.stepdefinition",
		"org.hooks" }, dryRun = false, monochrome = true, strict = true, snippets = SnippetType.UNDERSCORE,
		plugin = {"json:target/cucumber.json"})

public class TestRunnerClass {

}
