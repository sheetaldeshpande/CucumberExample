Feature: Log in

  As an Informa client
  I should be able to log in
  so that I can access all reports for various channels

  Background:
    Given I open offer manager

  @myTest
  Scenario: Verify user can log in successfully
    When I log in using username "admin" and password "Passw0rd!"
    Then I should be on home page

  @myTest
  Scenario Outline: Verify multiple users
    When I log in using username "<user>" and password "<password>"
    Then I should be on home page
    Examples:
      | user      | password  |
      | admin     | Passw0rd! |
      | pushadmin | Passw0rd! |

  @myTest
  Scenario: Verify user cannot log in with wrong credentials
    When I log in using username "admin1" and password "Passw0rd!"
    Then I should not be on home page

  @myTest
    Scenario: Verify user can login method2
      When I login with following credentials
        | user      | password  |
        | admin     | Passw0rd! |
      Then I should be on home page
 