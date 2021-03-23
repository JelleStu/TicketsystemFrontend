<script src="../services/auth.service.js"></script>
<template>
  <nav>
    <v-app-bar text app class="grey lighten-4" >
      <v-toolbar-title class="text-uppercase grey--text">
        <router-link to="/matches">Matches</router-link>
        <v-spacer></v-spacer>
        <router-link to="/teamsoverview">Teams</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text class="grey" v-on:click="logout">
        <span>Sign out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
import authService from "../services/auth.service"

export default {
  name: "NavBar.vue",
  methods: {
    logout(){
      authService.logout();
      this.$router.push("/")
    }
  }
}

</script>

<style scoped>

</style>