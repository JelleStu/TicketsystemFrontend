<template>
<div id="matchTable" style="padding-top:2%;">
  <v-row align="center" justify="center">
    <span>
    <h2>{{ matchdate }}</h2>
    </span>
  </v-row>
  <v-row align="center" justify="center" style="padding-top: 2%;">
    <v-data-table
    :headers="headers"
    :items="items"
    class="elevation-1"
    :hide-default-footer="true"
    >
      <template v-slot:items="props">
        <td class="text-xs-right">{{ props.item.hometeam }}</td>
        <td class="text-xs-right">{{ props.item.time }}</td>
        <td class="text-xs-right">{{ props.item.awayteam }}</td>

      </template>
    </v-data-table>
  </v-row>
</div>
</template>

<script>
export default {
name: "MatchDateTable.vue",
  props: {
    matchdate: {
      type: String,
    }
  },
  data () {
    return {
    headers: [
      { text: 'hometeam', value: 'hometeam' },
      { text: 'time', value: 'time' },
      { text: 'awayteam', value: 'awayteam' },
    ],
      items: [
        {
          hometeam: "ajax",
          time: "18:45",
          awayteam: "PSV"
        }
      ],
    }
  },
}

</script>

<style scoped>

</style>