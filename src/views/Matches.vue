<template>
  <div id="matches">
    <MatchDateTable matchdate="9 November"></MatchDateTable>
    <MatchDateTable matchdate="10 November"></MatchDateTable>
    <MatchDateTable matchdate="11 November"></MatchDateTable>
  </div>
</template>

<script>
import MatchDateTable from "@/components/MatchDateTable";
import matchService from "@/services/match.service";
export default {
  name: "Matches.vue",
  components:{
    MatchDateTable
  },
  data() {
    return {
      matches: []
    }
  },
  mounted() {
    matchService.getMatches().then(result => this.matches = result);
    console.log(this.matches);
  }
}
</script>

<style scoped>

</style>