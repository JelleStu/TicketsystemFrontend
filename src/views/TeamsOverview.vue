<template>
  <div class="teamoverview">
    <div id="app">
      <h1>List of all teams</h1>
      <v-list three-line>
        <div class="teamlist" v-for="(team, index) in teams" :key="index">
          <v-divider />
          <v-list-item
              :key="team.name"
              data-cy="teamTable"
          >
            <v-list-item-avatar>
              <v-img src="../assets/logo.png" ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html=team.name></v-list-item-title>
              <v-list-item-subtitle v-html="'hier komt iets leuks'"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </div>
  </div>
</template>
<script>
import teamsService from '../services/teams.service';

export default {
  name: 'Teamoverview',
  data (){
    return{
      teams : null,
    }
  },
  mounted() {
    // then awaits a promise
    teamsService.getTeams().then(result => this.teams = result);
  }
}
</script>

