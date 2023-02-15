@Feature
Feature: As a User, I want to Order the food

Background: 
Given I launch the browser and maximize the window
When I launch the URL

@Smoke
Scenario: The user gives the invalid “User name” and “password” 
When I click the account button 
And I enter the invalid username 
And I enter the invalid password 
And Click the login button
And I take a screenshot

@Regression
Scenario: The User successfully add the Dosa
When I click the dosa button
And I click the masala dosa option
And I click the add to cart button

@tag2
Scenario: The user fills out the registration form and ignores the confirm password
When I click the account button
And I enter the name in the name box
And I enter the email in the email box 
And I enter the number in the mobile number field 
And I enter the password in the password field
And Click register button 
And I take a screenshot of the pop-up

@Scenario4
Scenario: The user search for the “Coke” can and check the price
When I click the search icon
And I enter the text coke in the search field
And I hit the enter button
And I check the price of the can of Coke

@Scenario5
Scenario: The user selects the “Spanish Omelet”
When Click the search icon 
And pass the text as x
And click the enter button
And Select the option by probability
And check the dollar probability.

@Scenario6
Scenario: The user read “Our Story”
When Click the our story 
And Check the spelling mistake.

