<template>
  <div id="matchTable" style="padding-top:2%;">
    <v-row align="center" justify="center">
    <span>
    <h2> All matches for {{this.teamName}}</h2>
    </span>
    </v-row>
   <v-row align="center" justify="center" style="padding-top: 2%;">
      <v-data-table
          :headers="headers"
          :items="matches"
          class="elevation-1"
          :hide-default-footer="true"
      >
      </v-data-table>
    </v-row>
  </div>
</template>

<script>
import matchService from "@/services/match.service";
export default {
  name: "MatchTeamTable.vue",
  props: ['teamName'],
  data () {
    return {
      headers: [
        { text: 'hometeam', value: 'homeTeam' },
        { text: 'time', value: 'time' },
        { text: 'awayteam', value: 'awayTeam' },
      ],
      matches :[],
    }
  },
  mounted() {
    matchService.getMatchesByTeamID(this.$route.params.id).then(result => this.matches = result);
    console.log(this.matches);
  }
}
</script>

<style scoped>

</style>