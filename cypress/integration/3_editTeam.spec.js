describe("Edit Team", function() {

    context("Edit team", function() {
        beforeEach(function() {
            cy.visit("/");
        });

        it("Create teams", () => {
            cy.server();
            cy.route("PUT", "http://localhost:4545/ticketsystem/teams/").as("putrequest");
            cy.route("GET", "http://localhost:4545/ticketsystem/teams/").as("getrequest");
            cy.login();
            cy.visit("/admteams");
            cy.wait("@getrequest");
            cy.get("[data-cy=editTeamtable]").within(() => {
                cy.contains("TestTeamCypress").parent("tr").within(() =>{
                    cy.get("[data-cy=editTeamDialogIcon]").click();
                });
            });
            cy.get("span").should("contain", "TestTeamCypress");
            cy.get("[data-cy=editTeamDialogID").should("be.disabled");
            cy.get("[data-cy=editTeamDialogName").clear();
            cy.get("[data-cy=editTeamDialogName").type("CypressEditTest");
            cy.get("[data-cy=editTeam]").click();
            cy.wait("@putrequest");
            cy.wait("@getrequest");
            cy.get("[data-cy=editTeamDialog]").should("not.be.visible");
            cy.get("[data-cy=editTeamtable]").within(() => {
                    cy.get("td").should("contain", "CypressEditTest");
            });
        });

    });
});
