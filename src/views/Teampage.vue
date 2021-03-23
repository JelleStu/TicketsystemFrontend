<template>
  <v-main>
    <v-container class="teamImageContainer" style="width: 150px" >
      <v-row align="center" justify="center">
         <v-img src="../assets/logo.png"></v-img>
      </v-row>
      <v-row align="center" justify="center" style="padding-top: 10px">
        <h1>{{ team.name }} </h1>
      </v-row>
    </v-container>
    <v-row align="center" justify="center" style="padding-top: 20px">
      <MatchTeamTable v-bind:team-name="this.team.name"></MatchTeamTable>
    </v-row>
  </v-main>
</template>

<script>
import teamsService from '../services/teams.service';
import MatchTeamTable from "@/components/MatchTeamTable";

export default {
  name: "Teampage",
  components:{
    MatchTeamTable
  },
  data() {
    return {
      team: Object,
      test: "this is a team name"
    };
  },
  mounted() {
    teamsService.getTeamById(this.$route.params.id).then(result => this.team = result).catch(error => console.log(error));
    console.log(this.team.name);
  }
}
</script>

<style scoped>
#teamImageContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#teamImage {
  width: 100px;
  order: 2;
}
</style>