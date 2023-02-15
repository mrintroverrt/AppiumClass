package org.pojo;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Bistrobitesdc extends BaseClass{
	public Bistrobitesdc() {
		PageFactory.initElements(driver, this);
	}
	
	//First Pojo
	@FindBy(xpath = "(//a[@href='https://bistrobitesdc.com/login'])[2]")
	private WebElement account_button;
	@FindBy(id = "phone")
	private WebElement phonenum;
	@FindBy(id = "password")
	private WebElement password;
	@FindBy(name = "login")
	private WebElement login;
	//Second Pojo
	@FindBy(xpath = "//h6[contains(text(),'Dosa')]")
	private WebElement dosabtn;
	@FindBy(xpath = "(//h2[contains(text(),'Masala Dosa')])[1]")
	private WebElement masladosa;
	@FindBy(xpath = "//button[contains(text(),'Add to cart')]")
	private WebElement addtocart;
	//Third Pojo 
	@FindBy(id = "name")
	private WebElement name;
	@FindBy(id = "email")
	private WebElement email;
	@FindBy(xpath = "(//input[@class='woocommerce-Input woocommerce-Input--text input-text'])[5]")
	private WebElement phone;
	@FindBy(xpath = "(//input[@class='woocommerce-Input woocommerce-Input--text input-text'])[6]")
	private WebElement passwrd;
	@FindBy(xpath = "(//button[@value='Log in'])[2]")
	private WebElement register;
	//Fourth Pojo
	@FindBy(xpath = "//a[@class='lte-top-search-ico-close ']")
	private WebElement searchbtn;
	@FindBy(xpath = "(//input[@placeholder='Search'])[2]")
	private WebElement searchtextbox;
	@FindBy(xpath = "(//span[@class='woocommerce-Price-amount amount'])")
	private WebElement  cokeprice;
	//five Pojo 
	@FindBy(linkText = "Spanish omelet")
	private WebElement spanishomelet;
	@FindBy(id = "priceshow")
	private WebElement price;
	//Six Pojo
	@FindBy(xpath = "//span[contains(text(),'Our story')]")
	private WebElement ourstory;
	public WebElement getAccount_button() {
		return account_button;
	}
	public WebElement getPhonenum() {
		return phonenum;
	}
	public WebElement getPassword() {
		return password;
	}
	public WebElement getLogin() {
		return login;
	}
	public WebElement getDosabtn() {
		return dosabtn;
	}
	public WebElement getMasladosa() {
		return masladosa;
	}
	public WebElement getAddtocart() {
		return addtocart;
	}
	public WebElement getName() {
		return name;
	}
	public WebElement getEmail() {
		return email;
	}
	public WebElement getPhone() {
		return phone;
	}
	public WebElement getPasswrd() {
		return passwrd;
	}
	public WebElement getRegister() {
		return register;
	}
	public WebElement getSearchbtn() {
		return searchbtn;
	}
	public WebElement getSearchtextbox() {
		return searchtextbox;
	}
	public WebElement getCokeprice() {
		return cokeprice;
	}
	public WebElement getSpanishomelet() {
		return spanishomelet;
	}
	public WebElement getPrice() {
		return price;
	}
	public WebElement getOurstory() {
		return ourstory;
	}

	
}
