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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add("login", (username, password) =>{
    cy.route("GET", "http://localhost:4545/ticketsystem/user/signin").as("loginRequest");

    cy.get("[data-cy=username]").type("test");
    cy.get("[data-cy=password]").type("test");
    cy.get("[data-cy=loginButton]").click();

    cy.wait("@loginRequest");

    // we should be in
    cy.url().should("include", "/teamsoverview");

    cy.get("h1").should("contain", "List of all teams");
})
