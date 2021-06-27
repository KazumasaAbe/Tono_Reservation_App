<template>
  <v-main>
    <v-container>
    <v-row justify="center" align-content="center" class="text-caption">
    <v-col cols="8">
    <v-card>
      <!--
        <v-card-title>
        </v-card-title>
      -->
        <v-card-text>
          <v-form>
            <v-text-field
              prepend-icon="mdi-account-circle"  
              label="会員様ID(またはメールアドレス)"
              v-model="name" />
            <v-text-field
              v-bind:type="showPassword ? 'text' : 'password'"
              v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              prepend-icon="mdi-lock" 
              label="パスワード" 
              v-model="password"
             />
          </v-form>
          
          <v-card-actions>
          <v-btn
           color="info"
           block
           >
           ログイン</v-btn>
          </v-card-actions>
          <v-layout justify-right>
          <v-card-actions>
          <router-link to="/sign_up">会員登録がまだの方はこちら</router-link>
          </v-card-actions>
          </v-layout>
          <v-divider></v-divider>
        

          <!--Googleでログイン-->
          <v-card-actions>
          <v-btn
           class="text-capitalize 
                  white--text"
           color="deep-orange"
           block
           >
           <v-icon>mdi-google</v-icon>
           <v-spacer></v-spacer>
           Googleでログイン
           <v-spacer></v-spacer>
           </v-btn>
          </v-card-actions>

           <!--Facebookでログイン-->
          <v-card-actions>
          <v-btn
           class="text-capitalize"
           color="primary"
           block
           >
           <v-icon>mdi-facebook</v-icon>
           <v-spacer></v-spacer>
           Facebookでログイン
           <v-spacer></v-spacer>
           </v-btn>
          </v-card-actions>

          <!--Twitterでログイン-->
          <v-card-actions>
          <v-btn
           class="text-capitalize"
           color="info"
           block
           >
           <v-icon>mdi-twitter</v-icon>
           <v-spacer></v-spacer>
           Twitterでログイン
           <v-spacer></v-spacer>
           </v-btn>
          </v-card-actions>

          <!--Instagramでログイン-->
          <v-card-actions>
          <v-btn
           class="text-capitalize
                  white--text"
           color="#FF33FF"
           block
           >
           <v-icon>mdi-instagram</v-icon>
           <v-spacer></v-spacer>
           Instagramでログイン
           <v-spacer></v-spacer>
           </v-btn>
          </v-card-actions>

          <!--LINEでログイン-->
          <v-card-actions>
          <v-btn
           class="text-capitalize
                  white--text"
           color="#00FF00"
           block
           >
           <v-icon></v-icon>
           <v-spacer></v-spacer>
           LINEでログイン
           <v-spacer></v-spacer>
           </v-btn>
          </v-card-actions>

        </v-card-text>
    </v-card>
    </v-col>
    </v-row>
    </v-container>
  </v-main>
</template>
 
<script>
export default {
  name: 'Sign_up',
  data: function () {
    return {
      message: "新規登録です",
      showPassword:false,
      name:'',
      password:'',
    }
  }
}
</script>
 
<style scoped>
p {
  font-size: 2em;
}

.v-divider {
  margin: 30px;
  border-width:medium;
}
.v-icon {
  float:left;
}
</style>

