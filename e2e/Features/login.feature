@login
Feature: Login

  Background: Navigate to the login page
    Given A user navigates to the application login page

  @smoke @regression
  Scenario Outline: Check validation message is displayed when login credentials are wrong
    When user enters <email> and <password>
    And user clicks on the Login button
    Then A validation <message> should display on page

    Examples:
      | email           | password    | message                                                  |
      | jarrod@test.com | Test_100    | Either e-mail or password you have entered is incorrect. |
      | abc@test.com    | Test_1000   | Either e-mail or password you have entered is incorrect. |
      | abc@testrrr.com | Test_10rr00 | Either e-mail or password you have entered is incorrect. |

  @regression
  Scenario Outline: Check login is successful when credentials are correct
    When user enters <email> and <password>
    And user clicks on the Login button
    Then user with <email> should redirect to the dashboard page

    Examples:
      | email                   | password |
      | testuser343232@test.com | Test_100 |

  @regression
  Scenario: Check user is logged out when clicked on logout
    When user clicks on the profile dropdown
    And user clicks on logout
    Then user should redirect to the 'Login' page


