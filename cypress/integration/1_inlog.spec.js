describe("Logging In", function() {

    context("Successful log in sequence", function() {
        beforeEach(function() {
            cy.visit("/");
        });

        it("successfully logs in", () => {
            cy.server();
            cy.route("GET", "http://localhost:4545/ticketsystem/user/signin").as("loginRequest");

            cy.get("[data-cy=username]").type("test");
            cy.get("[data-cy=password]").type("test");
            cy.get("[data-cy=loginButton]").click();

            cy.wait("@loginRequest");

            // we should be in
            cy.url().should("include", "/teamsoverview");

            cy.get("h1").should("contain", "List of all teams");
        });

        it("displays errors on login", function() {
            cy.server();

            cy.get("[data-cy=loginButton]").click();

           cy.get("p").should("contain", "Name can not be empty");

           cy.get("p").should("contain", "Password can not be empty");

            cy.url().should("include", "/");
        });
    });
});
