<template>
  <div id="teamadmintable">
    <v-row align="center" justify="center">
      <v-data-table
          :headers="headers"
          :items="teams"
          class="elevation-1"
          data-cy="editTeamtable">
        <template v-slot:item.actions="{ item }">
          <div class="text-truncate">
            <v-icon class="mr-2" @click="showEditDialog(item)" color="primary" data-cy="editTeamDialogIcon">mdi-pencil</v-icon>
            <v-icon class="mr-2" @click="deleteTeam(item)" color="red" data-cy="deleteTeam">mdi-delete</v-icon>
          </div>
        </template>
      </v-data-table>
    <v-dialog v-model="editTeamDialog" width="29%" data-cy="editTeamDialog">
      <div class="justify-center d-flex">
        <v-card>
          <v-card-title>
            <span>Edit {{ editTeamName }}</span>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="4">
                <v-text-field v-model="editTeamObject.ID" label="Team id" data-cy="editTeamDialogID" :disabled=true></v-text-field>
              </v-col>
              <v-col cols="12" sm="8">
                <v-text-field v-model="editTeamObject.name" data-cy="editTeamDialogName" label="team name"></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue" text @click="showEditDialog()">Cancel</v-btn>
            <v-btn color="blue" text @click="editTeam(editTeamObject)" data-cy="editTeam">Save</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-dialog>
    </v-row>
  </div>
</template>

<script>
import teamsService from "@/services/teams.service";
export default {
  name: "TeamsTable",
  data () {
    return {
      headers : [
        { text: "Team ID", value: 'ID'},
        { text: "Team name", value: 'name'},
        { text: "Action", value: 'actions', sortable: false}
      ],
      teams: [],
      editTeamDialog: false,
      addDialog: false,
      editTeamObject: {},
      editTeamName: "",
    }
  },
  methods: {
    editTeam(team){
      console.log(team);
      teamsService.editTeam(team).then(() => {
        this.showEditDialog();
        this.getTeams();
      });
      },
    showEditDialog(team){
      this.editTeamDialog = !this.editTeamDialog;
      this.editTeamName = team.name||null;
      this.editTeamObject = team||{};
    },
    getTeams(){
      teamsService.getTeams().then(result => this.teams = result);
    },
    deleteTeam(team){
      console.log(team)
      teamsService.deleteTeam(team).then(() => this.getTeams());
    }
  },
  mounted() {
    teamsService.getTeams().then(result => this.teams = result);
  }
}
</script>

<style scoped>

</style>