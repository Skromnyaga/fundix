import TextConstants from "../TextConstants";

export class HeaderPage {
  logoButton = 'use[href="#svg-34751610_2286"]';
  getFundedButton = '[data-framer-name="Basic CTA"]';

    // Method to click the "How it works" button
  clickHowItWorksButton() {
    cy.contains(TextConstants.howItWorksButton).click(); // Click based on button text
  }

  // Method to click the "Why us" button
  clickWhyUsButton() {
    cy.contains(TextConstants.whyUsButton).click(); // Fixed typo: whuUsButton (if it's "Why us")
  }
  // Method to click the "Pro traders" button
  clickProTradersButton() {
    cy.contains(TextConstants.proTradersButton).click();
  }

  // Method to click the "FAQ" button
  clickFaqButton() {
    cy.contains(TextConstants.faqButton).click();
  }

  // Method to click the "Blog" button
  clickBlogButton() {
    cy.contains(TextConstants.blogButton).click();
  }

  // Method to check visibility of all header buttons
  checkAllHeaderButtonsVisible() {
    cy.contains(TextConstants.howItWorksButton).should('be.visible');
    cy.contains(TextConstants.whyUsButton).should('be.visible');
    cy.contains(TextConstants.proTradersButton).should('be.visible');
    cy.contains(TextConstants.faqButton).should('be.visible');
    cy.contains(TextConstants.blogButton).should('be.visible');
    cy.get(this.logoButton).should('be.visible');
  }

  // Seperate method for GetFunded button, because button skipped on the header on the Pro traders page
  checkGetFundedButtonIsVisible() {
    cy.get(this.getFundedButton).should('be.visible');
  }
}