import { HeaderPage } from "../support/pages/headerPage";
import { HomePage } from "../support/pages/homePage";
import TextConstants from "../support/TextConstants";

describe('Fundix E2E Tests', () => {
  const homePage = new HomePage()
  const headerPage = new HeaderPage()


  beforeEach(() => {
    homePage.openHomePage();
  })

  // 1. Load of the homepage
  it('1. Should load the home page successfully', () => {
    //Check header menu
    headerPage.checkAllHeaderButtonsVisible();
    headerPage.checkGetFundedButtonIsVisible
    //Check sections on the homepage
    homePage.checkMultipleTextOnThePage(TextConstants.homePageText);
    homePage.checkMultipleTextOnThePage(TextConstants.freeSection);
    homePage.checkMultipleTextOnThePage(TextConstants.transparencySection);
    homePage.checkMultipleTextOnThePage(TextConstants.fundedCapitalSection);
    homePage.checkMultipleTextOnThePage(TextConstants.buildSection);
    homePage.checkMultipleTextOnThePage(TextConstants.firstFooter);
    //Check google play button and inifiniity sign
    homePage.checkInfinitySignIsVisible();
    homePage.checkGooglePlayButtonIsVisible();
    cy.get('body').should('not.have.class', 'error'); // no errors of the loading
  });

  // 2. Scroll to How it works section after click on the How it works button
  it('Should verify How it Works section on homepage', () => {
  headerPage.clickHowItWorksButton();
  homePage.checkHowItWorksMainText();
  //Check sections on the how it works page
  homePage.checkMultipleTextOnThePage(TextConstants.step1Text);
  homePage.checkMultipleTextOnThePage(TextConstants.step2Text);
  homePage.checkMultipleTextOnThePage(TextConstants.step3Text);
  //Check get funded button
  homePage.checkGetFundedButtonOnTheHowItWorksSection();
});
});