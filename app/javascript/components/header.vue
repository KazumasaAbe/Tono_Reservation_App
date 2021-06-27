<template>
<div class="header">
      <v-app-bar
        app
        color="#F5F5F5"
        elevation="2"
        fixed
      >
        <v-toolbar-title class="ml-5">Tono_Resevation</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click="drawer = true" class="mr-5"></v-app-bar-nav-icon>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
        right
      >
        <v-list
          nav
          dense
        >
        <v-list-item-group>
          <v-list-item>
            <v-list-item-content><router-link to="/">Home</router-link></v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content><router-link to="/login">ログイン</router-link></v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content><router-link to="/users">ユーザー一覧</router-link></v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content><router-link to="/sales">売り上げ一覧</router-link></v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content><router-link to="/settlement">決済</router-link></v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content><router-link to="/local_currency">地域通過</router-link></v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content><router-link to="/acceptance_switching">受入可否確認</router-link></v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
</div>
</template>

<script>
export default{
  data() {
    return {
      drawer: false
    }
  }
}
</script>

<style scoped>
.header {
  margin-bottom:50px ;
}
</style>
