class AppsPage {
  constructor() {}

  navigateToFromWatchTVApp() {
    cy.upArrow();
    cy.upArrow();
    cy.rightArrow();
    cy.rightArrow();
    cy.rightArrow();
    cy.enter();
    cy.get('[data-testid="lists-container"]').should("be.visible");
    cy.get('[data-testid="lists-container"]')
      .find("div")
      .contains("Featured Apps")
      .should("be.visible");
  }

  openApp() {
    cy.enter();
  }

  navigateToAddToFavorites() {
    cy.downArrow();
    cy.rightArrow();
  }
}

export default new AppsPage();
