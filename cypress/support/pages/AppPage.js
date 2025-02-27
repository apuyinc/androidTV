class AppPage {
  constructor() {}

  addAppToFavs() {
    return new Promise((resolve) => {
      cy.get('[data-testid="lists-container"]').should("exist");
      cy.get("#app-fav-button").should("have.text", "Add to Favourites");
      cy.rightArrow();
      cy.enter();
      cy.contains("div", "Favourite Apps").should("be.visible");
      cy.enter();
    });
  }

  removeFromFavs() {
    return new Promise((resolve) => {
      cy.get("#app-fav-button").should("have.text", "Remove from Favourites");
      cy.rightArrow();
      cy.enter();
    });
  }
}

export default new AppPage();
