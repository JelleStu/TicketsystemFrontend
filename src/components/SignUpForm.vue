<template>
  <v-col cols="12" md="8">
    <v-card-text class="mt-12">
      <h1 class="text-center display-2 teal--text text--accent-3">Register here!</h1>
      <v-form data-cy="signupform">
        <v-text-field
            v-model="user.username"
            label="username"
            id="username"
            name="username"
            prepend-icon="person"
            type="text"
            data-cy="username"
        />
        <v-text-field
            v-model="user.password"
            label="password"
            id="password"
            name="password"
            prepend-icon="lock"
            type="password"
            data-cy="password"
        />
      </v-form>
      <h3 class="text-center mt-3">Forgot your password?</h3>
    </v-card-text>
    <div class="text-center mt-3">
      <v-btn v-on:click="handleSignup" rounded color="teal accent-3" dark type="submit" data-cy="signupbutton">REGISTER</v-btn>
    </div>
  </v-col>
</template>

<script>
import router from "@/router";

export default {
name: "SignUpForm",
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
    };
  },
  methods: {
    handleSignup(){
      this.$store.dispatch('auth/register', this.user).then(
          () => {
            router.push('/');
          },
          error => {
            console.log(this.user.username);
            console.log(this.user.password);
            alert('Something went wrong please try again!');
            console.log(error);
          }
      );
    },
  }
}
</script>

<style scoped>

</style>