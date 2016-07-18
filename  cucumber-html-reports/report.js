$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LogIn.feature");
formatter.feature({
  "line": 1,
  "name": "Log in",
  "description": "\r\nAs an Informa client\r\nI should be able to log in\r\nso that I can access all reports for various channels",
  "id": "log-in",
  "keyword": "Feature"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open offer manager",
  "keyword": "Given "
});
formatter.match({
  "location": "LogInSteps.iOpenOfferManager()"
});
formatter.result({
  "duration": 9594296693,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify user can log in successfully",
  "description": "",
  "id": "log-in;verify-user-can-log-in-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@myTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I log in using username \"admin\" and password \"Passw0rd!\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should be on home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 25
    },
    {
      "val": "Passw0rd!",
      "offset": 46
    }
  ],
  "location": "LogInSteps.iLogInUsingUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 5212797544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "should ",
      "offset": 2
    }
  ],
  "location": "LogInSteps.iShouldBeOnHomePage(String)"
});
formatter.result({
  "duration": 37287439,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Verify multiple users",
  "description": "",
  "id": "log-in;verify-multiple-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@myTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I log in using username \"\u003cuser\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should be on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "log-in;verify-multiple-users;",
  "rows": [
    {
      "cells": [
        "user",
        "password"
      ],
      "line": 20,
      "id": "log-in;verify-multiple-users;;1"
    },
    {
      "cells": [
        "admin",
        "Passw0rd!"
      ],
      "line": 21,
      "id": "log-in;verify-multiple-users;;2"
    },
    {
      "cells": [
        "pushadmin",
        "Passw0rd!"
      ],
      "line": 22,
      "id": "log-in;verify-multiple-users;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open offer manager",
  "keyword": "Given "
});
formatter.match({
  "location": "LogInSteps.iOpenOfferManager()"
});
formatter.result({
  "duration": 9926297531,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify multiple users",
  "description": "",
  "id": "log-in;verify-multiple-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@myTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I log in using username \"admin\" and password \"Passw0rd!\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should be on home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 25
    },
    {
      "val": "Passw0rd!",
      "offset": 46
    }
  ],
  "location": "LogInSteps.iLogInUsingUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 4887259523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "should ",
      "offset": 2
    }
  ],
  "location": "LogInSteps.iShouldBeOnHomePage(String)"
});
formatter.result({
  "duration": 57291710,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open offer manager",
  "keyword": "Given "
});
formatter.match({
  "location": "LogInSteps.iOpenOfferManager()"
});
formatter.result({
  "duration": 11294690407,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify multiple users",
  "description": "",
  "id": "log-in;verify-multiple-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@myTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I log in using username \"pushadmin\" and password \"Passw0rd!\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should be on home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "pushadmin",
      "offset": 25
    },
    {
      "val": "Passw0rd!",
      "offset": 50
    }
  ],
  "location": "LogInSteps.iLogInUsingUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 5929884883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "should ",
      "offset": 2
    }
  ],
  "location": "LogInSteps.iShouldBeOnHomePage(String)"
});
formatter.result({
  "duration": 70596688,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open offer manager",
  "keyword": "Given "
});
formatter.match({
  "location": "LogInSteps.iOpenOfferManager()"
});
formatter.result({
  "duration": 9193240358,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify user cannot log in with wrong credentials",
  "description": "",
  "id": "log-in;verify-user-cannot-log-in-with-wrong-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@myTest"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I log in using username \"admin1\" and password \"Passw0rd!\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I should not be on home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin1",
      "offset": 25
    },
    {
      "val": "Passw0rd!",
      "offset": 47
    }
  ],
  "location": "LogInSteps.iLogInUsingUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 1610152394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "should not ",
      "offset": 2
    }
  ],
  "location": "LogInSteps.iShouldBeOnHomePage(String)"
});
formatter.result({
  "duration": 43088867,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open offer manager",
  "keyword": "Given "
});
formatter.match({
  "location": "LogInSteps.iOpenOfferManager()"
});
formatter.result({
  "duration": 8986066476,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify user can login method2",
  "description": "",
  "id": "log-in;verify-user-can-login-method2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@myTest"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I login with following credentials",
  "rows": [
    {
      "cells": [
        "user",
        "password"
      ],
      "line": 32
    },
    {
      "cells": [
        "admin",
        "Passw0rd!"
      ],
      "line": 33
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I should be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInSteps.iLoginWithFollowingCredentials(Creds\u003e)"
});
formatter.result({
  "duration": 5266312639,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "should ",
      "offset": 2
    }
  ],
  "location": "LogInSteps.iShouldBeOnHomePage(String)"
});
formatter.result({
  "duration": 44765947,
  "status": "passed"
});
});