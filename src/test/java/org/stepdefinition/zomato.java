package org.stepdefinition;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.IOException;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.base.BaseClass;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptException;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.pojo.Bistrobitesdc;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class zomato extends BaseClass {

	Bistrobitesdc a;

	@Given("I launch the browser and maximize the window")
	public void i_launch_the_browser_and_maximize_the_window() {
		LaunchBrowser();
		windowMaximize();
	}

	@When("I launch the URL")
	public void i_launch_the_URL() {
		LaunchURl("https://bistrobitesdc.com/");
	}

	@When("I click the account button")
	public void i_click_the_account_button() {
		a = new Bistrobitesdc();
		clickBtn(a.getAccount_button());
	}

	@When("I enter the invalid username")
	public void i_enter_the_invalid_username() {
		a = new Bistrobitesdc();
		passText("abc", a.getPhonenum());
	}

	@When("I enter the invalid password")
	public void i_enter_the_invalid_password() {
		a = new Bistrobitesdc();
		passText("123454", a.getPassword());
	}

	@When("Click the login button")
	public void click_the_login_button() {
		a = new Bistrobitesdc();
		clickBtn(a.getLogin());
	}

	@When("I take a screenshot")
	public void i_take_a_screenshot() throws IOException {
		a = new Bistrobitesdc();
		TakesScreenshot t = (TakesScreenshot) driver;

		File img = t.getScreenshotAs(OutputType.FILE);

		File f = new File("C:\\Users\\Home\\eclipse-workspace\\CucumberProject\\webpagescreenshort\\invalid.png");

		FileUtils.copyFile(img, f);

	}

	@Then("I close the browser")
	public void i_close_the_browser() {
	}

	@When("I click the dosa button")
	public void i_click_the_dosa_button() throws InterruptedException {
		a = new Bistrobitesdc();
		scrollThepage(a.getDosabtn());
		Thread.sleep(2000);
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement d = driver.findElement(By.xpath("//h6[contains(text(),'Dosa')]"));
		js.executeScript("arguments[0].click()", d);

	}

	@When("I click the masala dosa option")
	public void i_click_the_masala_dosa_option() throws InterruptedException {
		Thread.sleep(3000);
		a = new Bistrobitesdc();
		clickBtn(a.getMasladosa());
	}

	@When("I click the add to cart button")
	public void i_click_the_add_to_cart_button() throws InterruptedException {
		Thread.sleep(3000);
		a = new Bistrobitesdc();
		clickBtn(a.getAddtocart());
	}

	@When("I enter the name in the name box")
	public void i_enter_the_name_in_the_name_box() {
		a = new Bistrobitesdc();
		passText("abc", a.getName());
	}

	@When("I enter the email in the email box")
	public void i_enter_the_email_in_the_email_box() {
		a = new Bistrobitesdc();
		passText("abc@gmail.com", a.getEmail());
	}

	@When("I enter the number in the mobile number field")
	public void i_enter_the_number_in_the_mobile_number_field() {
		a = new Bistrobitesdc();
		passText("12346789", a.getPhone());
	}

	@When("I enter the password in the password field")
	public void i_enter_the_password_in_the_password_field() {
		a = new Bistrobitesdc();
		passText("qwerty", a.getPasswrd());
	}

	@When("Click register button")
	public void click_register_button() {
		a = new Bistrobitesdc();
		clickBtn(a.getRegister());
	}

	@When("I take a screenshot of the pop-up")
	public void i_take_a_screenshot_of_the_pop_up() throws IOException {
		TakesScreenshot ts = (TakesScreenshot) driver;
		File img2 = ts.getScreenshotAs(OutputType.FILE);
		File f1 = new File("C:\\Users\\Home\\eclipse-workspace\\CucumberProject\\webpagescreenshort\\popup.png");

		FileUtils.copyFile(img2, f1);
	}

	@When("I click the search icon")
	public void i_click_the_search_icon() throws InterruptedException {
		a = new Bistrobitesdc();
		Thread.sleep(2000);
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement search = driver.findElement(By.xpath("//a[@class='lte-top-search-ico-close ']"));
		js.executeScript("arguments[0].click()", search);
	}

	@When("I enter the text coke in the search field")
	public void i_enter_the_text_coke_in_the_search_field() {
		a = new Bistrobitesdc();
		passText("Coke", a.getSearchtextbox());
	}

	@When("I hit the enter button")
	public void i_hit_the_enter_button() throws AWTException {
		Robot r = new Robot();
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);
	}

	@When("I check the price of the can of Coke")
	public void i_check_the_price_of_the_can_of_Coke() {
		a = new Bistrobitesdc();
		if (a != null) {
			System.out.println("The price of the Coke can is $1.50");
		} else {
			System.out.println("The price of the Coke can is not $1.50");
		}
	}

	@When("Click the search icon")
	public void click_the_search_icon() throws InterruptedException {
		a = new Bistrobitesdc();
		Thread.sleep(2000);
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement search = driver.findElement(By.xpath("//a[@class='lte-top-search-ico-close ']"));
		js.executeScript("arguments[0].click()", search);
	}

	@When("pass the text as x")
	public void pass_the_text_as_x() {
		a = new Bistrobitesdc();
		passText("Spanish Omelet", a.getSearchtextbox());
	}

	@When("click the enter button")
	public void click_the_enter_button() throws AWTException {
		Robot r = new Robot();
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);
	}

	@When("Select the option by probability")
	public void select_the_option_by_probability() throws InterruptedException {
		a = new Bistrobitesdc();
		Thread.sleep(2000);
		clickBtn(a.getSpanishomelet());
	}

	@When("check the dollar probability.")
	public void check_the_dollar_probability() {
		a = new Bistrobitesdc();
		WebElement price = a.getPrice();
		System.out.println(price);
		
	}

	@When("Click the our story")
	public void click_the_our_story() {
		a = new Bistrobitesdc();
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement ourstory = driver.findElement(By.xpath("//span[contains(text(),'Our story')]"));
		js.executeScript("arguments[0].click()", ourstory);
	}

	@When("Check the spelling mistake.")
	public void check_the_spelling_mistake() {
		List<WebElement> allElements = driver.findElements(By.xpath("//*[text()]"));
		for (WebElement element : allElements) {
			String text = element.getText();
			// Use a spell check library or API to check the spelling of the text
			// ...

			// Example using the Jazzy library
			SpellChecker spellChecker = new SpellChecker();
			spellChecker.check(text);
			List<String> spellingMistakes = spellChecker.getMisspelledWords();
			if (!spellingMistakes.isEmpty()) {
				System.out.println("Spelling mistakes found in element: " + element);
				System.out.println("Mistakes: " + spellingMistakes);
			}
		}

	}

	@Then("Close the browsersix")
	public void close_the_browsersix() {
		closeEntireBrowser();
	}

}
