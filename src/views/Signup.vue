<script>
import SignUpForm from "@/components/SignUpForm";
export default {
  components: {SignUpForm}
}
</script>
<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window>
                <v-window-item :value="1">
                  <v-row>
                    <SignUpForm></SignUpForm>
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text">
                        <h1 class="text-center headline mb-3">Already registered?</h1>
                      </v-card-text>
                      <div class="text-center mb-6">
                        <v-btn dark outlined @click="gotoSignIn()">Log in</v-btn>
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
  </v-app>
</template>

<script>
import SignUpForm from "@/components/SignUpForm";
import router from "@/router";


export default {
  name: "Signup",
  components: {
    SignUpForm
  },
  methods:{
    gotoSignIn(){
      router.push('/')
    }
  }

}
</script>

<style scoped>

</style>