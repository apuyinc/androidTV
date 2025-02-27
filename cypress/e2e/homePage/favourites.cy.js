import AppsPage from "../../support/pages/AppsPage";
import AppPage from "../../support/pages/AppPage";
import HomePage from "../../support/pages/HomePage";

describe("Favourite apps", () => {
  it("should be able to delete app in favourite apps row", () => {
    HomePage.visit();
    cy.rightArrow();

    HomePage.getNumberOfAppsInFavourites().then((countBefore) => {
      HomePage.deleteApp().then(() => {
        HomePage.getNumberOfAppsInFavourites().then((countAfter) => {
          expect(countAfter).to.be.equals(countBefore - 1);
        });
      });
    });
  });

  it("should not be able to delete the tv app", () => {
    HomePage.visit();
    HomePage.getNumberOfAppsInFavourites().then((countBefore) => {
      cy.pressHoldAndRelease("Enter", 2000).then(() => {
        cy.downArrow();
        cy.get('[data-testid="Watch TV"]').should(
          "not.have.attr",
          "data-focused",
          "focused"
        );
      });
    });
  });

  it("should be able to add an app from apps page", () => {
    HomePage.visit();
    HomePage.getNumberOfAppsInFavourites().then((countBefore) => {
      AppsPage.navigateToFromWatchTVApp();
      AppsPage.navigateToAddToFavorites();
      AppsPage.openApp();
      AppPage.addAppToFavs();
      cy.enter();
      //TODO:get the name of the app before adding it and assert it is listed in favourites, for now we will only check the number of apps increased
      HomePage.getNumberOfAppsInFavourites().then((countAfter) => {
        expect(countAfter).to.be.equals(countBefore + 1);
      });
    });
  });
});
