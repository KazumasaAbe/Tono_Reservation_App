<template>
  <v-main>
    {{ message }}
  </v-main>
</template>
 
<script>
export default {
  name: 'Users',
  data: function () {
    return {
      message: "ユーザー一覧"
    }
  }
}
</script>
 
<style scoped>
p {
  font-size: 2em;
}
</style>
