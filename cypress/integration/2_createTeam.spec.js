describe("Create Team", function() {

    context("Create team", function() {
        beforeEach(function() {
            cy.visit("/");
        });

        it("Create teams", () => {
            cy.server();
            cy.route("POST", "http://localhost:4545/ticketsystem/teams/").as("postrequest");
            cy.route("GET", "http://localhost:4545/ticketsystem/teams/").as("getrequest");
            cy.login();
            
            cy.visit("/admteams");
            cy.wait("@getrequest");
            cy.get("[data-cy=editTeamtable]").within(() => {
                cy.get("td").should("contain", "Ajax");
            })
            cy.get("[data-cy=createTeamButtonDialog]").click();
            cy.get("[data-cy=createTeamName]").type("TestTeamCypress");
            cy.get("[data-cy=createNewTeam]").click();
            cy.wait("@postrequest");
            cy.visit("/admteams")
            cy.wait("@getrequest");
            cy.get("[data-cy=editTeamtable]").within(() => {
                cy.get("td").should("contain", "TestTeamCypress");
            })
        });

    });
});
