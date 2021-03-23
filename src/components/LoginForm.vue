<template>
  <validation-observer
      ref="observer"
      v-slot="{ invalid }"
  >
    <v-form
        ref="form"
        lazy-validation
        @submit.prevent="handleLogin"
        data-cy="loginForm"
    >
      <validation-provider
          v-slot="{ errors }"
          name="Name"
          rules="required"
      >
        <v-text-field
            v-model="user.username"
            label="Name"
            data-cy="username"
        >
      </v-text-field>
        <p class="red--text">{{errors[0]}}</p>
      </validation-provider>

      <validation-provider
          v-slot="{ errors }"
          name="Password"
          rules="required"
      >
      <v-text-field
          v-model="user.password"
          label="Password"
          type="password"
          data-cy="password"
      ></v-text-field>
        <p class="red--text">{{errors[0]}}</p>
      </validation-provider>

      <v-btn
          color="success"
          class="mr-4"
          type="submit"
          data-cy="loginButton"
      >
        Login
      </v-btn>
      {{invalid}}
    </v-form>
  </validation-observer>
</template>

<script>
import router from "@/router";
import { required} from 'vee-validate/dist/rules'
import {extend, ValidationObserver, ValidationProvider,} from 'vee-validate'

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

export default {
name: "LoginForm",
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      user :{
        username: '',
        password: '',
      }
    }),
    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      handleLogin() {
        this.submit();
        if (this.$refs.form.validate()) {
          this.$store.dispatch('auth/login', this.user).then(
              () => {
                router.push('/teamsoverview');
              },
          );
        }
      },
    },
  }
</script>

<style scoped>

</style>