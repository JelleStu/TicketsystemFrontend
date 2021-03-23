describe("Delete Team", function() {

    context("Successful delete sequence", function() {
        beforeEach(function() {
            cy.visit("/");
        });

        it("Delete team", () => {
            cy.server();
            cy.route("GET", "http://localhost:4545/ticketsystem/teams/").as("getrequest");
            cy.login();
            cy.visit("/admteams");
            cy.get("[data-cy=editTeamtable]").within(() => {
                cy.contains("CypressEditTest").parent("tr").within(() =>{
                    cy.get("[data-cy=deleteTeam]").click();
                });
            });

            cy.wait("@getrequest");
            cy.get("[data-cy=editTeamtable]").within(() => {
                cy.get("td").should("not.contain", "CypressEditTest");
            });
        });

    });
});
