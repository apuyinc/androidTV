// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("pressRightArrow", () => {
  cy.keyDown("ArrowRight");
});

Cypress.Commands.add("releaseRightArrow", () => {
  cy.keyUp("ArrowRight");
});

Cypress.Commands.add("rightArrow", () => {
  cy.pressRightArrow();
  cy.releaseRightArrow();
});

Cypress.Commands.add("pressLeftArrow", () => {
  cy.keyDown("ArrowLeft");
});

Cypress.Commands.add("releaseLeftArrow", () => {
  cy.keyUp("ArrowLeft");
});

Cypress.Commands.add("leftArrow", () => {
  cy.pressLeftArrow();
  cy.releaseLeftArrow();
});

Cypress.Commands.add("pressUpArrow", () => {
  cy.keyDown("ArrowUp");
});

Cypress.Commands.add("releaseUpArrow", () => {
  cy.keyUp("ArrowUp");
});

Cypress.Commands.add("upArrow", () => {
  cy.pressUpArrow();
  cy.releaseUpArrow();
});

Cypress.Commands.add("pressDownArrow", () => {
  cy.keyDown("ArrowDown");
});

Cypress.Commands.add("releaseDownArrow", () => {
  cy.keyUp("ArrowDown");
});

Cypress.Commands.add("downArrow", () => {
  cy.pressDownArrow();
  cy.releaseDownArrow();
});

Cypress.Commands.add("pressEnter", () => {
  cy.keyDown("Enter");
});

Cypress.Commands.add("releaseEnter", () => {
  cy.keyUp("Enter");
});

Cypress.Commands.add("enter", () => {
  cy.pressEnter();
  cy.releaseEnter();
});

Cypress.Commands.add("pressHoldAndRelease", (keyToPress) => {
  cy.keyDown(keyToPress);
  cy.wait(2000).then(() => {
    cy.keyUp(keyToPress);
  });
});

Cypress.Commands.add("keyDown", (keyToPress) => {
  cy.get("body").trigger("keydown", { key: keyToPress, code: keyToPress });
});

Cypress.Commands.add("keyUp", (keyToPress) => {
  cy.get("body").trigger("keyup", { key: keyToPress, code: keyToPress });
});
