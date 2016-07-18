package informa.steps;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import informa.model.Creds;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.internal.ProfilesIni;

import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * Created by admin on 18-07-2016.
 */
public class LogInSteps {

    private WebDriver driver;

    @When("^I log in using username \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void iLogInUsingUsernameAndPassword(String userName, String password) throws Throwable {
        driver.findElement(By.id("username")).sendKeys(userName);
        driver.findElement(By.id("password")).sendKeys(password);

        try {
            driver.findElement(By.id("login-btn")).click();
        } catch (UnhandledAlertException f) {
            try {
                Alert alert = driver.switchTo().alert();
                alert.accept();
            } catch (NoAlertPresentException e) {
                e.printStackTrace();
            }
        }


    }

    @Given("^I open offer manager$")
    public void iOpenOfferManager() throws Throwable {
        driver = new FirefoxDriver();
        driver.get("https://prioritydev.r53.02.net/offerManager/login/auth");
    }

    @Then("^I (should |should not )be on home page$")
    public void iShouldBeOnHomePage(String option) throws Throwable {
        if (option.contains("not"))
            Assert.assertTrue(driver.findElement(By.id("username")).isDisplayed());
        else
            Assert.assertEquals("Offer Manager", driver.findElement(By.tagName("h1")).getText());
    }

    @When("^I login with following credentials$")
    public void iLoginWithFollowingCredentials(List<Creds> credentials) throws Throwable {
        iLogInUsingUsernameAndPassword(credentials.get(0).getUser(), credentials.get(0).getPassword());
    }


}
