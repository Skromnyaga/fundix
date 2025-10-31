import TextConstants from "../TextConstants";

export class HomePage {
  googlePlayButton = '#hero > div.framer-1vkxbpj > div.ssr-variant.hidden-1u62yl > a > div > img';
  getFundedButtonHowItWorks = '[data-framer-name="Square CTA"]';
  infinitySvg = '.framer-1uik97m'

  openHomePage() {
    cy.visit('/'); //URL will be recieved from the cypress.config.js file
  }

  checkGooglePlayButtonIsVisible() {
    cy.get(this.googlePlayButton).should('be.visible');
  }

  checkGetFundedButtonOnTheHowItWorksSection() {
    cy.get(this.getFundedButtonHowItWorks).should('be.visible');
  }

  checkHowItWorksMainText() {
    cy.contains(TextConstants.howItWorksMainText).should('be.visible');
  }

  checkInfinitySignIsVisible() {
    cy.get(this.infinitySvg).should('be.visible');
  }

  checkMultipleTextOnThePage(texts) {
    texts.forEach((text) => {
      cy.contains(text).should('be.visible');
    });
  }

}