<template>
  <div id="addteambutton">
  <v-btn class="mx-2" fab dark color="indigo" style="margin-bottom: 195px; margin-left: 30px;" @click="showAddDialog" data-cy="createTeamButtonDialog">
    <v-icon dark>
      mdi-plus
    </v-icon>
  </v-btn>
  <v-dialog v-model="addTeamDialog" width="29%">
    <div class="justify-center d-flex">
      <v-card>
        <v-card-title>
          <span>Add a new team</span>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="5">
              <v-text-field v-model="addedTeam.ID" label="Will be generated." :disabled=true></v-text-field>
            </v-col>
            <v-col cols="12" sm="5">
              <v-text-field v-model="addedTeam.name" label="team name" data-cy="createTeamName"></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue" text @click="showAddDialog()">Cancel</v-btn>
          <v-btn color="blue" text @click="saveTeam(addedTeam)" data-cy="createNewTeam">Save</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-dialog>
  </div>
</template>

<script>
import teamService from "@/services/teams.service";
export default {
name: "AddTeamButton",
  data() {
    return {
      addedTeam:{
        ID: 0,
        name: "",
      },
      addTeamDialog: false,
    }
  },
  methods : {
    showAddDialog(){
      this.addTeamDialog = !this.addTeamDialog;
    },
    saveTeam(team){
      teamService.saveTeam(team);
      this.showAddDialog();
    }
  },
}
</script>

<style scoped>

</style>