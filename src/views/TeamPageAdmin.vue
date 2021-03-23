<template>
<div id="teampageadmin">
  <v-row align="center" justify="center" style="padding-top: 35px; padding-bottom: 25px;">
    <h1>Overview all editable teams</h1>
  </v-row>
  <v-row align="center" justify="center">
    <teams-table></teams-table>
    <add-team-button></add-team-button>
  </v-row>
</div>
</template>

<script>
import TeamsTable from "@/components/TeamsTable";
import AddTeamButton from "@/components/AddTeamButton";
export default {
name: "TeamPageAdmin",
  components: {
  TeamsTable, AddTeamButton
  }
}

</script>

<style scoped>

</style>