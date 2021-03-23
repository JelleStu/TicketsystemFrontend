<script>
import LoginForm from "@/components/LoginForm";
export default {
  components: {LoginForm}
}
</script>
<template>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window>
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                    <v-card-text class="mt-12">
                      <h1 class="text-center display-2 teal--text text--accent-3">Sign in</h1>
                      <div class="text-center" mt-4>
                        <v-btn class="mx-2" color="blue" fab outlined>
                          <v-icon>mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn class="mx-2" fab  color="red" outlined>
                          <v-icon>mdi-google-plus</v-icon>
                        </v-btn>
                        <v-btn class="mx-2" fab color="blue darken-4" outlined>
                          <v-icon>mdi-linkedin</v-icon>
                        </v-btn>
                      </div>
                      <h4 class="text-center ml-4">Ensure your email for registration</h4>
                      <LoginForm>

                      </LoginForm>
                    </v-card-text>
                    </v-col>
                    <v-col cols="12" md="4" class="teal accent-3">

                      <v-card-text class="white--text">
                        <h1 class="text-center headline mb-3">No User?</h1>
                        <h5 class="text-center overline mb-3">
                          Please Sign Up to continue
                        </h5>

                      </v-card-text>
                      <div class="text-center mb-6">
                        <v-btn dark outlined @click="goToSignUp">Sign Up</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
</template>

<script>
import LoginForm from "@/components/LoginForm";
import router from "@/router";

export default {
  name: 'Login',
  components :{
    LoginForm
  },
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
    };
  },
  computed: {
  },
  methods: {
    goToSignUp(){
      router.push('/signup');
    }
  }
}
</script>
