class HomePage {
  constructor() {}

  visit() {
    cy.visit("/");
    cy.get('[data-testid="Watch TV"]').should("exist");
    cy.get("#favourite-apps").children("div").should("have.length.at.least", 2);
  }

  deleteApp() {
    return new Promise((resolve) => {
      cy.pressHoldAndRelease("Enter", 2000).then(() => {
        cy.pressDownArrow();
        cy.releaseDownArrow();
        cy.pressEnter();
        cy.releaseEnter();
      });
    });
  }

  getNumberOfAppsInFavourites() {
    return cy.get("#favourite-apps").children("div").its("length");
  }

  getFocusedElement() {
    return cy.get('[data-focused="focused"]').then(($focusedElement) => {
      return $focusedElement;
    });
  }
}

export default new HomePage();
